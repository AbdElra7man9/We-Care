const Appointment = require('../Models/appointmentModel');
const Doctor = require('../Models/doctorModel');
const catchAsync = require('../utils/catchAsync');
const dateToEpoch = require('../utils/dateToEpoch');
const AppError = require('../utils/AppError');

exports.getAppointmentById = catchAsync(async (req, res, next) => {
  const appointment = await Appointment.findById(req.params.appointmentId)
    .populate({ path: 'patient', select: '_id' })
    .populate({ path: 'doctor', select: '_id' });
  res.json({ status: 'success', appointment });
});
// APIs patients can do on "Doctor" model
exports.getAllDoctorAppointments = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorID).populate({
    path: 'appointments',
    select: ['-doctor'],
  });
  const allAppointments = doctor.appointments;
  if (!doctor) {
    return next(new AppError('there is no doctor by this ID', 400));
  }
  res.json({
    status: 'success',
    results: allAppointments.length,
    allAppointments,
  });
});

exports.getAvailableDoctorAppointments = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorID).populate({
    path: 'appointments',
    select: ['-doctor'],
  });

  const allAppointments = doctor.appointments;
  const availableAppointments = [];
  allAppointments.forEach((appointment) => {
    if (appointment.status === 'available' && appointment.date > Date.now())
      availableAppointments.push(appointment);
  });
  if (!doctor) {
    return next(new AppError('there is no doctor by this ID', 400));
  }
  res.json({
    status: 'success',
    results: availableAppointments.length,
    availableAppointments,
  });
});

exports.getAvailableDoctorDays = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findById(req.params.doctorID).populate(
    'appointments'
  );
  const availableDayes = [];
  // const dateOptions = {
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // };
  doctor.appointments.forEach((appointment) => {
    // const day = new Date(dateToEpoch(appointment.date)).toLocaleDateString(
    //   'en-US',
    //   dateOptions
    // );
    const day = new Date(dateToEpoch(appointment.date)).toISOString();
    if (!availableDayes.includes(day)) availableDayes.push(day);
  });
  res.json({
    status: 'success',
    availableDayes,
  });
});

exports.getAvailableDoctorAppointmentsByDay = catchAsync(
  async (req, res, next) => {
    const doctor = await Doctor.findById(req.params.doctorID).populate({
      path: 'appointments',
      select: '-doctor',
    });
    const day = new Date(req.query.day);
    const type = req.query?.type;
    const allAppointments = doctor.appointments;
    const availableAppointmentsByDay = [];
    allAppointments.forEach((appointment) => {
      // console.log(
      //   type,
      //   '     ',
      //   appointment.type,
      //   '    ',
      //   type ? appointment.type === type : true
      // );
      // console.log(
      //   appointment.status === 'available',
      //   '     ',
      //   appointment.date > Date.now(),
      //   '     ',
      //   day.getTime() == dateToEpoch(appointment.date),
      //   '     ',
      //   type ? appointment.type === type : true
      // );
      if (
        appointment.status === 'available' &&
        appointment.date > Date.now() &&
        day.getTime() == dateToEpoch(appointment.date) &&
        (type ? appointment.type === type : true)
      )
        availableAppointmentsByDay.push(appointment);
    });
    if (!doctor) {
      return next(new AppError('there is no doctor by this ID', 404));
    }
    res.json({
      status: 'success',
      results: availableAppointmentsByDay.length,
      availableAppointmentsByDay,
    });
  }
);

exports.bookAppointment = catchAsync(async (req, res, next) => {
  const patient = req.user;
  const appointment = await Appointment.findById(
    req.body.AppointmentID
  ).populate({ path: 'doctor', select: ['specialization', 'name'] });
  if (appointment?.patient?._id.toString() === patient._id.toString())
    return next(new AppError('You already booked this appointment', 400));
  if (appointment.status !== 'available')
    return next(new AppError("This appointment isn't available !", 400));
  const doctor = await Doctor.findById(appointment.doctor._id);
  appointment.status = 'booked';
  appointment.price = doctor.fees;
  appointment.patient = patient.id;
  appointment.comment = req.body.comment;
  doctor.patients.push(patient._id);
  await doctor.save({ validateBeforeSave: false });
  appointment.populate({ path: 'patient', select: '_id' });
  await appointment.save({ validateBeforeSave: false });
  res.status(200).json({
    status: 'success',
    appointment,
  });
});

// APIs Doctor can do on him self model
exports.getMyBookedAppointments = catchAsync(async (req, res, next) => {
  const doctorId = req.user._id;
  const myBookedAppointments = await Appointment.find({
    doctor: doctorId,
    status: 'booked',
  });
  res.status(200).json({
    status: 'success',
    results: myBookedAppointments.length,
    myBookedAppointments,
  });
});
// This controller take the user data from "protect" midleware and send the user's  appointment whatever
//the user is doctor or patient
exports.getMyAppointments = catchAsync(async (req, res, next) => {
  const pastAppointment = [];
  const upcomingApointments = [];
  const user = req.user;
  let allAppointments = [];
  if (user.__t == 'Patient') {
    allAppointments = await Appointment.find({
      patient: user._id,
    })
      .populate({ path: 'doctor', select: ['name', 'profilePicture'] })
      .populate({ path: 'patient', select: '_id' });
  }
  if (user.__t == 'Doctor') {
    allAppointments = await Appointment.find({
      doctor: user._id,
    })
      .populate({ path: 'patient', select: ['name', 'profilePicture'] })
      .populate({ path: 'doctor', select: '_id' });
  }
  allAppointments.forEach((appointment) => {
    if (appointment.date > Date.now()) upcomingApointments.push(appointment);
    if (appointment.date < Date.now()) pastAppointment.push(appointment);
  });
  res.status(200).json({
    status: 'success',
    results: allAppointments.length,
    pastAppointment,
    upcomingApointments,
  });
});
