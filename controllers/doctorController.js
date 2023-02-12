const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const doctors = await Doctor.find();
  res.json({
    status: 'success',
    results: doctors.length,
    doctors,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const newDoctor = await Doctor.findById(req.params.id);
  if (!newDoctor) {
    return next(new AppError('there is no doctor by this ID', 404));
  }
  res.json(newDoctor);
});

exports.addNewDoctor = catchAsync(async (req, res, next) => {
  const newDoctor = await Doctor.create(req.body);
  res.json(newDoctor);
});
