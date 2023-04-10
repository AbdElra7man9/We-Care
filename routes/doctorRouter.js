const express = require('express');

const {
  getAllDoctors,
  getDoctor,
  updateDoctorStatus,
} = require('.././controllers/doctorController');
const {
  doctorSignUP,
  restrictTo,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', doctorSignUP);
router.route('/').get(getAllDoctors);

router.route('/:id').get(getDoctor);
router.patch('/:id', protect, restrictTo('Coordinator'), updateDoctorStatus);

module.exports = router;
