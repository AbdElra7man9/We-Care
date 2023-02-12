const express = require('express');
const { patientSignUP } = require('../controllers/authController');

const router = express.Router();

router.post('/patient-signup', patientSignUP);

module.exports = router;
