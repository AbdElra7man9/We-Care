const Review = require('../Models/reviewModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');


exports.makeReview = catchAsync(async function (req, res, next) {
    const patient = req.user.id;
    const doctor = req.params.id;
    const {rating , comment} = req.body;
    

    if(await Review.count( {patient : req.user.id , doctor : req.params.id} )>0)
    return next(new AppError("you already made a review for this doctor before",401));
    
    if(!await Doctor.findById(doctor).exec())
    return next(new AppError("this doctor is not exist",401));

    if(!rating)
    return next(new AppError("you shoud give rate for the doctor",401));

    const ratingvalues =[1,2,3,4,5]
    if(!ratingvalues.includes(rating))
    return next (new AppError('not applicable entering rating ',401));

    if(comment.length>255)
    return next(new AppError("comment length shoud be less than 255 char",401));

    const newReview = await new Review({rating , comment, doctor , patient }).save()
    .then(()=>{return res.json({msg:"success"})})
    .catch((error)=>{return next(new AppError("internal server error", 500))})
});


exports.updateReview = catchAsync(async function (req, res, next) {
    const review = await Review.findOne({patient : req.user.id , doctor : req.params.id});

    if(!review)
    return next(new AppError("u didnt give this doctor rate befor",401));

    if(!await Doctor.findById(req.params.id).exec())
    return next(new AppError("this doctor is not exist",401));

    if(!req.body.rating)
    return next(new AppError("you shoud give rate for the doctor",401));

    const ratingvalues =[1,2,3,4,5]
    if(!ratingvalues.includes(req.body.rating))
    return next (new AppError('not applicable entering rating ',401));

    if(req.body.comment.length>255)
    return next(new AppError("comment length shoud be less than 255 char",401));

    const updateReview = await review.updateOne({rating : req.body.rating , comment : req.body.comment})
    .then(()=>{return res.json({msg:"success"})})
    .catch((error)=>{return next(new AppError("internal server error", 500))})
});


exports.deleteReview = catchAsync(async function(req, res, next){
    const review = await Review.findOne({patient : req.user.id , doctor : req.params.id});

    if(!review)
    return next(new AppError("u didnt give this doctor rate befor",401));


    await Review.findOneAndRemove({patient : req.user.id , doctor : req.params.id})
    .then(()=>{return res.json({msg:"success"})})
    .catch((error)=>{return next(new AppError("internal server error", 500))})

});
