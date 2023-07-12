const express = require('express');
const protect = require('../Middlewares/protect');
const {
  getAllDoctorAppointments,
  getAvailableDoctorAppointments,
  bookAppointment,
  getAvailableDoctorAppointmentsByDay,
  getAvailableDoctorDays,
  getMyAppointments,
  getMyBookedAppointments,
  getAppointmentById,
  completedOrNot,
} = require('../controllers/appointmentController');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.get('/MyBooked', protect, restrictTo('Doctor'), getMyBookedAppointments);
//protected routs
router.get('/availableByday/:doctorID', getAvailableDoctorAppointmentsByDay);
router.get('/availabledays/:doctorID', getAvailableDoctorDays);
router.use(protect);
router.get('/all/:doctorID', getAllDoctorAppointments);
router.get('/available/:doctorID', getAvailableDoctorAppointments);
router.get('/', getMyAppointments);
router.get('/:appointmentId', getAppointmentById);
//protected route and restrict to patient
router.post('/book', restrictTo('Patient'), bookAppointment);
router.post('/completedOrNot', restrictTo('Doctor'), protect , completedOrNot);


//protected routs and restrict to doctor
module.exports = router;