const mongoose = require('mongoose')
const BlogsSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            max: 2200
        },
        des: {
            type: String,
            max: 2200
        },
        numComments: {
            type: Number,
            default: 0
        },
        numLikes: {
            type: Number,
            default: 0
        },
        image: {
            public_id: {
                type: String,
                required: [true, 'The Product image is Required'],
            },
            url: {
                type: String,
                required: [true, 'The Product image is Required'],
            }
        },
    },
    { timestamps: true }
);
const BlogModel = mongoose.model('Blog', BlogsSchema);
module.exports = BlogModel;