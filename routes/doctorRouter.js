const express = require('express');

const doctorController = require('.././controllers/doctorController');
const router = express.Router();

router
  .route('/')
  .get(doctorController.getAllDoctors)
  .post(doctorController.addNewDoctor);

router.route('/:id').get(doctorController.getDoctor);
module.exports = router;
