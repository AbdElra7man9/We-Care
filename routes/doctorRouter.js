const express = require('express');

const {
  getAllDoctors,
  getDoctor,
} = require('.././controllers/doctorController');
const router = express.Router();

router.route('/').get(getAllDoctors);

router.route('/:id').get(getDoctor);
module.exports = router;
