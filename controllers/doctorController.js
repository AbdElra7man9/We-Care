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
  const allDoctors = await features.query;
  res.json({
    status: 'success',
    results: allDoctors.length,
    allDoctors,
  });
});

exports.getTopDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(Doctor.find({ status: 'accepted' , numberOfRating: { $gte: 10}})
      .sort({ averageRating: -1, numberOfRating: -1 }) , req.query)
      .Paginate().Filter();
  const topDoctors = await features.query;
  res.json({
    status: 'success',
    results: topDoctors.length,
    topDoctors,
  });
});

exports.getSpecializedDoctors = catchAsync(async (req, res, next) => {
  const doctorsNum = await Doctor.count({ status: 'accepted' , specialization: req.params.specialization });
  const features = new Features(Doctor.find({ status: 'accepted' , specialization: req.params.specialization }) , req.query)
      .Paginate();
  const specializedDoctors = await features.query;
  res.json({
    status: 'success',
    doctorsNum: doctorsNum,
    results: specializedDoctors.length,
    specializedDoctors,
  });
});

exports.getAllPendingDoctors = catchAsync(async (req, res, next) => {
  const features = new Features(
    Doctor.find({ status: 'pending' }),
    req.query
  ).Paginate();
  const pendingDoctors = await features.query;
  res.json({
    status: 'success',
    results: pendingDoctors.length,
    pendingDoctors,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.id);
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
  const searchedDoctors = await features.query;
  if (searchedDoctors.length == 0) {
    return next(new AppError('No doctors match your search!', 404));
  }
  res.status(200).json({
    status: 'success',
    results: searchedDoctors.length,
    searchedDoctors,
  });
});
