const express = require('express');
const { patientSignUP } = require('../controllers/patientController');

const router = express.Router();

router.post('/signup', patientSignUP);

module.exports = router;
