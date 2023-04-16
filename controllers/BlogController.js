const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const Features = require("../utils/Features");
const cloudinary = require('../utils/cloudinary')
const BlogModel = require('../Models/BlogModel')

exports.NewBlog = catchAsync(async (req, res, next) => {
    const { des, title } = req.body
    let received = req.body.image;

    const result = await cloudinary.uploader.upload(received, {
        folder: "Helth-Care/posts",
        transformation: [
            { width: 1000, quality: 'auto' }
        ],
        resource_type: 'auto'
    });


    const newPost = await new BlogModel({
        user: req.user.id, image:
        {
            public_id: result.public_id,
            url: result.secure_url,
        },
        title, des,
    })
    newPost.populate('user', 'username avatar ')
    // newPost.populate('comments.user', 'username avatar');
    newPost.save()
        .then(Blog => {
            return res.json({
                message: 'post added successfully',
                Blog
            });
        }).catch(error => {
            return next(new AppError(error.message, 500));
        })
});

exports.DeleteBLOG = catchAsync(async (req, res, next) => {
    const post = await BlogModel.deleteOne({ _id: req.params.id });
    await cloudinary.uploader.destroy(post.image.public_id);
    if (post) {
        return res.json({ message: 'Deleted !' });
    }
    return next(new AppError('An Error accoured'), 400)

});
exports.userBLOG = catchAsync(async (req, res, next) => {
    const resultperpage = 4;
    const features = new Features(BlogModel.find({ user: req.user.id, }), req.query)
        .Pagination(resultperpage);

    const userBLOGs = await features.query
        .populate('user', 'username avatar')
        .sort("-createdAt");
    if (!userBLOGs) {
        return next(new AppError('No Posts For that user'), 400)
    }
    return res.json({
        status: 'success',
        userBLOGs
    });
});

exports.userBlogById = catchAsync(async (req, res, next) => {
    const resultperpage = 4;
    const features = new Features(BlogModel.find({ user: req.params.id }), req.query)
        .Pagination(resultperpage)

    const userBLOGs = await features.query
        .populate('user', 'username avatar')
        .sort("-createdAt");
    if (!userBLOGs) {
        return next(new AppError('No Posts For that user'), 400)
    }
    return res.json({
        status: 'success',
        Blogs: userBLOGs
    });
});

exports.AllBlogs = catchAsync(async (req, res, next) => {
    const resultperpage = 4;
    const features = new Features(BlogModel.find(), req.query)
        .Pagination(resultperpage);

    const Blogs = await features.query
        .populate('user', 'username avatar')
        .sort("-createdAt");
    if (!Blogs) {
        return next(new AppError('No Posts For that user'), 400)
    }
    return res.json({
        status: 'success',
        Blogs
    });
});

exports.GetBlogDetails = catchAsync(async (req, res, next) => {
    const BlogDetails = await BlogModel.findById(req.params.id)
        .populate('user', 'username avatar');
    if (!BlogDetails) {
        return next(new AppError('Blog not founded'), 400)
    }
    return res.json({
        status: 'success',
        BlogDetails
    });
});

