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
    Comment.populate({ path: 'user', select: ['name', 'profilePicture'] });
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
        .populate({ path: 'user', select: ['name', 'profilePicture'] });
    if (Comments == []) {
        return next(new AppError('Be the first to comment', 404));
    }
    return res.json({
        status: 'success',
        Comments
    })
});
exports.GetLikes = catchAsync(async (req, res, next) => {
    const likes = await LikeModel.find({ blog: req.params.id })
        .populate({ path: 'user', select: ['name', 'profilePicture'] });
    if (likes == []) {
        return next(new AppError('Be the first to like', 404));
    }
    return res.json({
        status: 'success',
        likes
    })
});
exports.Like = catchAsync(async (req, res, next) => {
    const isliked = await LikeModel.findOne({ blog: req.params.id, user: req.user.id });
    if (isliked) {
        await LikeModel.deleteOne({ blog: req.params.id, user: req.user.id });
        await BlogModel.findByIdAndUpdate(req.params.id, {
            $inc: {
                numLikes: -1
            }
        }, { new: true });
        return res.json({
            status: 'success',
            message: 'Unliked !'
        });
    } else {
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
    }

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
