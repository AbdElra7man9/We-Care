const Review = require('../Models/reviewModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Features = require("../utils/Features");


exports.acceptDoctor = (req, res, next) => { };
exports.AllReview = catchAsync(async function (req, res, next) {
    const features = new Features(Review.find(), req.query)
        .Paginate()

    const reviews = await features.query;

    if (reviews.length == 0)
        return next(new AppError("there is no reviews here", 401));

    res.json({
        status: 'success',
        results: reviews.length,
        reviews,
    });
});

exports.DeleteReview = catchAsync(async function (req, res, next) {
    res.json({ message: 'deleted' })
    // await Review.deleteOne({ _id: req.params.id })
    //     .then(() => {
    //         return res.json({
    //             status: "success",
    //             message: "Deleted !"
    //         })
    //     })
    //     .catch((error) => { return next(new AppError(error.message, 500)) })
});