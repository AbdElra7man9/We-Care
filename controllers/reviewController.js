const Review = require('../Models/reviewModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');



exports.makeReview = catchAsync(async function (req, res, next) {
    const patient = req.user.id;
    const doctor = req.params.id;
    const {rating , comment} = req.body;


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
    .catch((error)=>{return console.log(error)})
});


