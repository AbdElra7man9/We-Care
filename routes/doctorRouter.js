const express = require('express');

const {
  getAllDoctors,
  getAllPendingDoctors,
  getDoctor,
  updateDoctorStatus,
  searchForDoctors,
  getTopDoctors,
  getSpecializedDoctors,
} = require('.././controllers/doctorController');
const { doctorSignUP } = require('../controllers/authController');

const restrictTo = require('../Middlewares/restrictTo');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.post('/signup', doctorSignUP);
router.route('/').get(getAllDoctors);
router.route('/topdoctors').get(getTopDoctors);
router.route('/specialization/:specialization').get(getSpecializedDoctors);
router.route('/pending', protect, restrictTo('Coordinator')).get(getAllPendingDoctors);

router.route('/search').get(searchForDoctors);
router.route('/:id').get(getDoctor);
router.patch('/:id', protect, restrictTo('Coordinator'), updateDoctorStatus);

module.exports = router;
