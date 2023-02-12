const express = require('express');

const {
  getAllDoctors,
  addNewDoctor,
  getDoctor,
} = require('.././controllers/doctorController');
const router = express.Router();

router.route('/').get(getAllDoctors).post(addNewDoctor);

router.route('/:id').get(getDoctor);
module.exports = router;
