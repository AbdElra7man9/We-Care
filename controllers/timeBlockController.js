const Appointment = require('../Models/appointmentModel');
const TimeBlock = require('../Models/timeBlockModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.addTimeBlock = catchAsync(async (req, res, next) => {
  const doctor = req.user;
  const allDoctorTimeblocks = await TimeBlock.find({ doctor: doctor._id });

  //Creat a time block without saving into database
  const newTimeBlock = new TimeBlock(req.body);
  newTimeBlock.doctor = doctor._id;
  let availableTimeToAddTB = true;
  //validate time block (doctor can't add more than time block in same time)
  allDoctorTimeblocks.forEach((TB) => {
    if (
      (newTimeBlock.startTime <= TB.startTime &&
        newTimeBlock.period * 60 * 60 * 1000 >
          TB.startTime - newTimeBlock.startTime) ||
      (newTimeBlock.startTime >= TB.startTime &&
        TB.period * 60 * 60 * 1000 > newTimeBlock.startTime - TB.startTime)
    ) {
      availableTimeToAddTB = false;
      return;
    }
  });
  if (!availableTimeToAddTB)
    return next(new AppError('You have appointments in this time block', 400));
  // save time block in database after validation
  await newTimeBlock.save();

  //Calculate number of patients doctor can examine in this time block
  const numberOfpatients = newTimeBlock.period / doctor.timePerPatient;
  let startTimeCopy = new Date(newTimeBlock.startTime.getTime());

  // Create appointements for doctor depend on his time block
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
  await req.user.save({ validateBeforeSave: false });

  return res.status(200).json(newTimeBlock);
});
