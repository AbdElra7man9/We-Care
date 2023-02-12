const express = require('express');
const { patientSignUP } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', patientSignUP);

module.exports = router;
