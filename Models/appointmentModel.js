const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['video call', 'visit'],
    default: 'video call',
  },
  status: {
    type: String,
    default: 'available',
    enum: ['available', 'booked', 'done'],
  },
  paid: {
    type: Boolean,
    default: false,
  },
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Doctor',
  },
  date: {
    type: Date,
    required: [true, 'appointment must have a date'],
  },
  price: {
    type: Number,
    required: [true, 'appoint ment must have a price'],
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
