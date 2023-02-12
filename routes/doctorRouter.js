const express = require('express');

const {
  getAllDoctors,
  getDoctor,
} = require('.././controllers/doctorController');
const { doctorSignUP } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', doctorSignUP);

router.route('/').get(getAllDoctors);

router.route('/:id').get(getDoctor);
module.exports = router;
