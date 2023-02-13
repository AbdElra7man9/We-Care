const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');
const User = require('../Models/userModel');
const Patient = require('../Models/patientModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');

function getToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

exports.patientSignUP = catchAsync(async function (req, res, next) {
  const newPatient = await Patient.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  res.status(201).json({
    status: 'success',
    user: newPatient,
    token: getToken(newPatient._id),
  });
});

exports.doctorSignUP = catchAsync(async function (req, res, next) {
  const newDoctor = await Doctor.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    specialization: req.body.specialization,
  });
  res.status(201).json({
    status: 'success',
    user: newDoctor,
    token: getToken(newDoctor._id),
  });
});

exports.userLogin = catchAsync(async function (req, res, next) {
  const { email, password } = req.body;
  //if user did't enter email or password
  if (!email || !password)
    return next(new AppError('Email and password are required !', 401));

  //if email or password not correct
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await bcrypt.compare(password, user.password)))
    return next(new AppError("email or password is't correct", 401));

  //every things OK
  res.status(200).json({
    staus: 'success',
    user,
    token: getToken(user._id),
  });
});
