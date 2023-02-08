const mongoose = require('mongoose');

const User = require('./userModel');

const Doctor = User.discriminator(
  'Doctor',
  new mongoose.Schema(
    {
      specialization: {
        type: String,
        required: [true, 'A doctor must have a specialization'],
        trim: true,
      },
      experience: Number,
      fees: {
        type: Number,
        default: 300,
      },
      patients: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Patient',
        },
      ],
      averageRating: {
        type: Number,
        default: 4.5,
      },
    },
    { discriminatorKey: 'kind' }
  )
);

module.exports = Doctor;
