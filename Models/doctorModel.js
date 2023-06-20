const mongoose = require('mongoose');

const User = require('./userModel');
const Appointment = require('./appointmentModel');
doctorSchema = new mongoose.Schema(
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
    ScheduleTiming: [
      {
        start: Date,
        end: Date,
      },
    ],
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
