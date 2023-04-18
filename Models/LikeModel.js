const mongoose = require('mongoose')
const LikeSchema = new mongoose.Schema(
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
    },
    { timestamps: true }
);
const LikeModel = mongoose.model('Like', LikeSchema);
module.exports = LikeModel;