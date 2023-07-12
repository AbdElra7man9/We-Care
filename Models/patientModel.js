const mongoose = require('mongoose');

const User = require('./userModel');

const Patient = User.discriminator(
  'Patient',
  new mongoose.Schema(
    {
      diagnosis: String,
      bloodType: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      },
      weight: Number,
      height: Number,
      waterLevel: String,
      sugarLevel: String,
      appointments: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Appointment',
        },
      ],
    },
    { discriminatorKey: 'userType' }
  )
);

module.exports = Patient;
