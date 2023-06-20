const Appointment = require('../Models/appointmentModel');
const TimeBlock = require('../Models/timeBlockModel');
const User = require('../Models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.addTimeBlock = catchAsync(async (req, res, next) => {
  const newTimeBlock = new TimeBlock(req.body);
  newTimeBlock.doctor = req.user._id;
  const numberOfpatients = newTimeBlock.period / newTimeBlock.timePerPatient;
  let startTimeCopy = newTimeBlock.startTime;
  //   console.log(newTimeBlock);
  //   console.log(startTimeCopy);
  for (let i = 0; i < numberOfpatients; i++) {
    const newAppointment = await Appointment.create({
      date: startTimeCopy,
      type: newTimeBlock.type,
      doctor: req.user._id,
    });
    req.user.appointments.push(newAppointment);
    await req.user.save({ validateBeforeSave: false });
    startTimeCopy.setMinutes(
      startTimeCopy.getMinutes() + newTimeBlock.timePerPatient * 60
    );
    console.log(newAppointment);
  }

  await newTimeBlock.save();
  return res.json(newTimeBlock);
});
