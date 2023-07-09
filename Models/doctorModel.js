const mongoose = require('mongoose');

const User = require('./userModel');
const { specialists } = require('../data');
doctorSchema = new mongoose.Schema(
  {
    bio: {
      type: String,
    },
    specialization: {
      type: String,
      required: [true, 'A doctor must have a specialization'],
      trim: true,
      enum: specialists,
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
    appointments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Appointment',
      },
    ],
    timePerPatient: {
      type: Number,
      required: true,
      max: [1, 'the max time per patient you can add is 1 hour'],
      min: [0.25, 'the min time per patien you can add is .25 hour'],
      default: 0.5,
    },
    numberOfRating: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
      set: (val) => Math.round(val * 10) / 10,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['refused', 'pending', 'accepted'],
    },
  },
  { discriminatorKey: 'userType' }
);
const Doctor = User.discriminator('Doctor', doctorSchema);

module.exports = Doctor;
