const Doctor = require("../Models/doctorModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.isDoctor = catchAsync((req, res, next) => {

});

exports.hasRight = catchAsync(async (req, res, next) => {
    const doctor = await Doctor.findOne({ _id: req.params.id });
    if (!doctor) {
        return next(new AppError('No doctor founded with this id', 400))
    }
    if (!doctor.patients.some(p => p === req.params.id)) {
        return next(new AppError('you are not treated with this doctor', 404));
    } else {
        next();
    }
});