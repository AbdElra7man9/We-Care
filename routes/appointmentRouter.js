const express = require('express');
const protect = require('../Middlewares/protect');
const {
  getAllDoctorAppointments,
  getAvailableDoctorAppointments,
  bookAppointment,
  getAvailableDoctorAppointmentsByDay,
  getAvailableDoctorDays,
} = require('../controllers/appointmentController');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.use(protect);
router.get('/:doctorID', getAllDoctorAppointments);
router.get('/available/:doctorID', getAvailableDoctorAppointments);
router.get('/availableByday/:doctorID', getAvailableDoctorAppointmentsByDay);
router.get('/availabledays/:doctorID', getAvailableDoctorDays);
router.post('/book', protect, restrictTo('Patient'), bookAppointment);

module.exports = router;
