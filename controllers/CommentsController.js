const catchAsync = require("../utils/catchAsync");
const CommentModel = require("../Models/CommentModel");
const BlogModel = require('../Models/BlogModel');
const AppError = require("../utils/AppError");
const LikeModel = require("../Models/LikeModel");

exports.NewComment = catchAsync(async (req, res, next) => {
    const { content } = req.body;
    if (!content) {
        return next(new AppError('Comment required!', 400));
    };
    
    const Comment = await new CommentModel({
        content,
        user: req.user.id,
        blog: req.params.id
    }).save()

    if (Comment) {
        await BlogModel.findByIdAndUpdate(req.params.id, {
            $inc: {
                numComments: 1
            }
        }, { new: true })
    };

    return res.json({
        status: 'success',
        Comment
    });
});

exports.GetComments = catchAsync(async (req, res, next) => {
    const Comments = await CommentModel.find({ blog: req.params.id })
    if (Comments == []) {
        return next(new AppError('Be the first to comment', 404));
    }
    return res.json({
        status: 'success',
        Comments
    })
});

exports.Like = catchAsync(async (req, res, next) => {
    const like = await new LikeModel({
        user: req.user.id,
        blog: req.params.id
    }).save()

    if (like) {
        await BlogModel.findByIdAndUpdate(req.params.id, {
            $inc: {
                numLikes: 1
            }
        }, { new: true });

    }
    return res.json({
        status: 'success',
        message: 'Liked !'
    });
});

exports.UnLike = catchAsync(async (req, res, next) => {
    await LikeModel.deleteOne({ _id: req.params.id })

    await BlogModel.findByIdAndUpdate(req.params.id, {
        $inc: {
            numLikes: -1
        }
    }, { new: true });
    return res.json({
        status: 'success',
        message: 'UnLiked !'
    });
});
