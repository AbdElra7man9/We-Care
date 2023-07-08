path = require('path');
const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');
const AppError = require('../utils/AppError');

exports.getMyData = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  res.status(200).json({
    status: 'success',
    user: user,
  });
});

exports.updateInfo = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "you can't update password here please use /updateMyPassword.",
        400
      )
    );
  }
  const filteredInfo = filterObject(req.body, 'name', 'username');
  if (req.file)
    filteredInfo.profilePicture = path.join(
      __dirname,
      '..',
      'public',
      'img',
      'users',
      req.file.filename
    );
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredInfo, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    return next(new AppError('there is no user by this ID', 404));
  }
  res.json({
    status: 'success',
    user,
  });
});
