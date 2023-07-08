const express = require('express');
const { patientSignUP } = require('../controllers/authController');
const { GetAllPatients } = require('../controllers/patientController');
const protect = require('../Middlewares/protect');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.post('/signup', patientSignUP);
router.get('/', protect, restrictTo('Coordinator'), GetAllPatients);

module.exports = router;
