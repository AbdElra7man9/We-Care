const Chat = require("../Models/ChatModel");
const Message = require("../Models/MessageModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Features = require("../utils/Features");

exports.NewMSG = catchAsync(async (req, res, next) => {
    const { msg, image } = req.body;
    let result = {}
    // if (image) {
    //     const newIMG = await cloudinary.uploader.upload(image, {
    //         folder: "Instegram/MesssgesMedia",
    //     });
    //     result = newIMG;
    // }
    const chat = await new Message({
        chatId: req.params.id, sender: req.user.id, msg,
        // image: {
        //     public_id: result.public_id,
        //     url: result.secure_url,
        // }
    }).save()

    if (chat) {
        await Chat.findByIdAndUpdate({ _id: req.params.id },
            { lastMSG: msg },
            { new: true })
        return res.json(chat);
    }
    return next(new AppError(err.message, 404));
});

exports.GetMSGs = catchAsync(async (req, res, next) => {
    const resultperpage = 20;
    const features = new Features(Message.find({ chatId: req.params.id }), req.query)
        .Pagination(resultperpage)
    const MSGs = await features.query.sort('-createdAt')
    return res.json(MSGs)
});

exports.DeleteAllMSGs = catchAsync(async (req, res, next) => {
    await Message.deleteMany({ chatId: req.params.id })
    await Chat.findByIdAndUpdate({ _id: req.params.id },
        { $unset: { lastMSG: '' } },
        { new: true })
    return res.json({ msg: 'Deleted !' })
});