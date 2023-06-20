const catchAsync = require('../utils/catchAsync');
const Patient = require('../Models/patientModel');
const Features = require('../utils/Features');

exports.GetAllPatients = catchAsync(async (req, res, next) => {
    const features = new Features(Patient.find(), req.query)
        .Paginate();
    const Patients = await features.query;
    res.json({
        status: 'success',
        results: Patients.length,
        Patients,
    });
});
