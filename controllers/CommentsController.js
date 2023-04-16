const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Features = require("../utils/Features");

exports.NewComment = catchAsync(async (req, res, next) => {
    const Comment = await CommentModel.findByIdAndUpdate(req.params.id, {
        $push: {
            comments: { user: req.user.id, comment: req.body.comment }
        },
        $inc: {
            numComments: 1
        }
    }, { new: true });

    await BlogsModel.findByIdAndUpdate(req.params.id, {
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

    await BlogsModel.findByIdAndUpdate(req.params.id, {
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

    await BlogsModel.findByIdAndUpdate(req.params.id, {
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
