const Appointment = require('../Models/appointmentModel');
const TimeBlock = require('../Models/timeBlockModel');
const catchAsync = require('../utils/catchAsync');

exports.addTimeBlock = catchAsync(async (req, res, next) => {
  const newTimeBlock = new TimeBlock(req.body);
  const doctor = req.user;
  newTimeBlock.doctor = doctor._id;
  const numberOfpatients = newTimeBlock.period / doctor.timePerPatient;
  let startTimeCopy = newTimeBlock.startTime;
  for (let i = 0; i < numberOfpatients; i++) {
    const newAppointment = await Appointment.create({
      date: startTimeCopy,
      type: newTimeBlock.type,
      doctor: doctor._id,
      price: doctor.fees,
    });
    doctor.appointments.push(newAppointment);
    startTimeCopy.setMinutes(
      startTimeCopy.getMinutes() + doctor.timePerPatient * 60
    );
  }
  await newTimeBlock.save();
  await req.user.save({ validateBeforeSave: false });

  return res.status(200).json(newTimeBlock);
});
