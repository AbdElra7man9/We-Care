const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

acceptDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.user._id);
  if (doctor.status != 'accepted')
    return next(new AppError('You must be accepted before doing this action'));
  next();
});

module.exports = acceptDoctor;
