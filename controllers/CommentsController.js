const catchAsync = require("../utils/catchAsync");
const CommentModel = require("../Models/CommentModel");
const BlogModel = require('../Models/BlogModel');
const AppError = require("../utils/AppError");

exports.NewComment = catchAsync(async (req, res, next) => {
    const { comment } = req.body;
    if (!comment) {
        return next(new AppError('Comment required!', 400));
    }
    const Comment = await CommentModel.findByIdAndUpdate(req.params.id, {
        $push: {
            comments: { user: req.user.id, comment }
        },
        $inc: {
            numComments: 1
        }
    }, { new: true });

    await BlogModel.findByIdAndUpdate(req.params.id, {
        $inc: {
            numComments: 1
        }
    }, { new: true })

    // .populate('comments.user', 'username avatar');
    return res.json({
        status: 'success',
        Comment
    });
});

exports.Like = catchAsync(async (req, res, next) => {
    await CommentModel.findByIdAndUpdate(req.params.id, {
        $push: {
            likes: req.user._id
        },
        $inc: {
            numLikes: 1
        }
    }, { new: true });

    await BlogModel.findByIdAndUpdate(req.params.id, {
        $inc: {
            numLikes: 1
        }
    }, { new: true });

    // .populate('comments.user', 'username avatar')
    // .populate('user', 'username avatar');

    return res.json({
        status: 'success',
        message: 'Liked !'
    });
});

exports.UnLike = catchAsync(async (req, res, next) => {
    await CommentModel.findByIdAndUpdate(req.params.id, {
        $pull: {
            likes: req.user._id
        },
        $inc: {
            numLikes: 1
        }
    }, { new: true });

    await BlogModel.findByIdAndUpdate(req.params.id, {
        $inc: {
            numLikes: -1
        }
    }, { new: true });
    // .populate('comments.user', 'username avatar')
    // .populate('user', 'username avatar');

    return res.json({
        status: 'success',
        message: 'UnLiked !'
    });
});
