const Chat = require('../Models/ChatModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Features = require('../utils/Features');

exports.NewChat = catchAsync(async (req, res, next) => {
  const isAlreadyinChat = await Chat.findOne({
    $and: [
      { members: { $elemMatch: { $eq: req.user.id } } },
      { members: { $elemMatch: { $eq: req.params.id } } },
    ],
  }).populate('members');
  if (isAlreadyinChat) {
    // const ChatID = isAlreadyinChat.members.find(p => p.id !== req.user.id)
    return res.json(isAlreadyinChat._id);
  }
  await new Chat({
    members: [req.user._id, req.params.id],
  })
    .save()
    .then((chat) => {
      return res.json({
        status: 'success',
        chatId: chat._id,
      });
    })
    .catch((err) => {
      return next(new AppError(err.message, 404));
    });
});

exports.GetAll = catchAsync(async (req, res, next) => {
  const resultperpage = 10;
  const features = new Features(
    Chat.find({
      members: { $in: [req.user.id] },
      lastMSG: { $ne: null },
    }),
    req.query
  ).Pagination(resultperpage);

  const chats = await features.query
    .populate('members', 'username name avatar fullname')
    .sort('-updatedAt');
  return res.json({
    status: 'success',
    results: chats.length,
    chats,
  });
});

exports.GetSignleChat = catchAsync(async (req, res, next) => {
  const SingleChat = await Chat.findById(req.params.id);
  return res.json({
    status: 'success',
    // results: SingleChat.length,
    chat: SingleChat,
  });
});
