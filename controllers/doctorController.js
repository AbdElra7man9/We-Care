const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');
const Features = require("../utils/Features");

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(Doctor.find({ status: 'accepted' }) , req.query)
      .Paginate();
  const doctors = await features.query;
  res.json({
    status: 'success',
    results: doctors.length,
    doctors,
  });
});

exports.getAllPendingDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(Doctor.find({ status: 'pending' }) , req.query)
      .Paginate();
  const doctors = await features.query;
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
  res.json({
    status: 'success',
    newDoctor,
  });
});

exports.updateDoctorStatus = catchAsync(async (req, res, next) => {
  const newStatus = filterObject(req.body, 'status');
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, newStatus, {
    new: true,
    runValidators: true,
  });
  res.json(doctor);
});
