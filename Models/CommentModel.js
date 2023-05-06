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
        content: {
            type: String,
            required: true,
            max: 2200
        },
    },
    { timestamps: true }
);
const CommentModel = mongoose.model('comment', CommentsSchema);
module.exports = CommentModel;