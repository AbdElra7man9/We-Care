const express = require('express');
const { patientSignUP } = require('../controllers/authController');
const { GetAllPatients } = require('../controllers/patientController');

const router = express.Router();

router.post('/signup', patientSignUP);
router.get('/', GetAllPatients);

module.exports = router;
