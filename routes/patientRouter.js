const express = require('express');
const { patientSignUP } = require('../controllers/authController');
const {
  GetAllPatients,
  getAllApointmentsForPatient,
  getMyData,
} = require('../controllers/patientController');
const protect = require('../Middlewares/protect');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.post('/signup', patientSignUP);
router.get('/', GetAllPatients);
router.get('/myData', protect, restrictTo('Patient'), getMyData);

module.exports = router;
