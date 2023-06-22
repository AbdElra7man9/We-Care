const Appointment = require('../Models/appointmentModel');
const Doctor = require('../Models/doctorModel');
const catchAsync = require('../utils/catchAsync');
const dateToEpoch = require('../utils/dayToEpoch');
const dayToEpoch = require('../utils/dayToEpoch');

exports.getAllDoctorAppointments = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorID).populate(
    'appointments'
  );
  const allAppointments = doctor.appointments;
  if (!doctor) {
    return next(new AppError('there is no doctor by this ID', 404));
  }
  res.json({
    status: 'success',
    allAppointments,
  });
});

exports.getAvailableDoctorAppointments = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorID).populate(
    'appointments'
  );
  const allAppointments = doctor.appointments;
  const availableAppointments = [];
  allAppointments.forEach((appointment) => {
    if (appointment.status === 'available' && appointment.date > Date.now())
      availableAppointments.push(appointment);
  });
  if (!doctor) {
    return next(new AppError('there is no doctor by this ID', 404));
  }
  res.json({
    status: 'success',
    availableAppointments,
  });
});

exports.getAvailableDoctorAppointmentsByDay = catchAsync(
  async (req, res, next) => {
    const doctor = await Doctor.findById(req.params.doctorID).populate(
      'appointments'
    );
    const day = new Date(req.body.day);

    const allAppointments = doctor.appointments;
    const availableAppointmentsByDay = [];

    allAppointments.forEach((appointment) => {
      //   console.log(day.getTime());
      //   console.log(dateToEpoch(appointment.date));
      if (
        appointment.status === 'available' &&
        appointment.date > Date.now() &&
        day.getTime() == dayToEpoch(appointment.date)
      )
        availableAppointmentsByDay.push(appointment);
    });
    if (!doctor) {
      return next(new AppError('there is no doctor by this ID', 404));
    }
    res.json({
      status: 'success',
      availableAppointmentsByDay,
    });
  }
);

exports.bookAppointment = catchAsync(async (req, res, next) => {
  const patient = req.user;
  const appointment = await Appointment.findById(req.body.AppointmentID);
  const doctor = await Doctor.findById(appointment.doctor._id);
  appointment.status = 'booked';
  appointment.patient = patient.id;
  doctor.patients.push(patient._id);
  await doctor.save({ validateBeforeSave: false });
  await appointment.save({ validateBeforeSave: false });
  res.status(200).json({
    status: 'success',
    appointment,
  });
});
