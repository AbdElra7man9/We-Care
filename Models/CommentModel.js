const mongoose = require('mongoose')
const CommentsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        blog: {
            type: mongoose.Schema.ObjectId,
            ref: 'Blog',
            required: true
        },
        likes: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Users',
                required: true,
            },
        ],
        comments: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Users',
                    required: true
                }, comment: {
                    type: String,
                }, time: {
                    type: Date,
                    default: Date.now()
                },
            },
        ],
    },
    { timestamps: true }
);
const CommentModel = mongoose.model('comment', CommentsSchema);
module.exports = CommentModel;