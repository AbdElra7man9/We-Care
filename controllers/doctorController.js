const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');
const Features = require('../utils/Features');

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(
    Doctor.find({ status: 'accepted' }),
    req.query
  ).Paginate();
  const doctors = await features.query;
  res.json({
    status: 'success',
    results: doctors.length,
    doctors,
  });
});

exports.getTopDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(Doctor.find({ status: 'accepted' , numberOfRating: { $gte: 10}})
      .sort({ averageRating: -1, numberOfRating: -1 }) , req.query)
      .Paginate();
  const doctors = await features.query;
  res.json({
    status: 'success',
    results: doctors.length,
    doctors,
  });
});

exports.getSpecializedDoctors = catchAsync(async (req, res, next) => {
  const doctorsNum = await Doctor.count({ status: 'accepted' , specialization: req.params.specialization });
  const features = new Features(Doctor.find({ status: 'accepted' , specialization: req.params.specialization }) , req.query)
      .Paginate();
  const doctors = await features.query;
  res.json({
    status: 'success',
    doctorsNum: doctorsNum,
    results: doctors.length,
    doctors,
  });
});

exports.getAllPendingDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(
    Doctor.find({ status: 'pending' }),
    req.query
  ).Paginate();
  const doctors = await features.query;
  res.json({
    status: 'success',
    results: doctors.length,
    doctors,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id).populate('appointments');
  if (!doctor) {
    return next(new AppError('there is no doctor by this ID', 404));
  }
  res.json({
    status: 'success',
    doctor,
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

exports.searchForDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(Doctor.find(), req.query)
    .Search()
    .Paginate()
    .Filter();
  const doc = await features.query;
  if (doc.length == 0) {
    return next(new AppError('No doctors match your search!', 404));
  }
  res.status(200).json({
    status: 'success',
    results: doc.length,
    doc,
  });
});
