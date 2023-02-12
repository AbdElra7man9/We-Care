const catchAsync = require('../utils/catchAsync');
const Patient = require('../Models/patientModel');

exports.patientSignUP = catchAsync(async function (req, res, next) {
  const newPatient = await Patient.create(req.body);
  res.status(201).json({
    status: 'success',
    user: newPatient,
  });
});
