const catchAsync = require('../utils/catchAsync');
const Patient = require('../Models/patientModel');
const Appointment = require('../Models/appointmentModel');
const Features = require('../utils/Features');

exports.GetAllPatients = catchAsync(async (req, res, next) => {
  const features = new Features(Patient.find(), req.query).Paginate();
  const Patients = await features.query;
  res.json({
    status: 'success',
    results: Patients.length,
    Patients,
  });
});

exports.getAllApointmentsForPatient = catchAsync(async (req, res, next) => {
  const pastAppointment = [];
  const upcomingApointments = [];
  const patient = req.user;
  const allAppointments = await Appointment.find({ patient: patient._id });
  allAppointments.forEach((appointment) => {
    if (appointment.date > Date.now()) upcomingApointments.push(appointment);
    if (appointment.date < Date.now() || appointment.date === Date.now())
      pastAppointment.push(appointment);
  });
  res.status(200).json({
    status: 'success',
    results: allAppointments.length,
    pastAppointment,
    upcomingApointments,
  });
});
