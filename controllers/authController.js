const catchAsync = require('../utils/catchAsync');
const Patient = require('../Models/patientModel');

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
  });
});
