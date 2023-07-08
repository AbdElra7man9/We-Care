// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   appointmentId: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Appointment',
//     required: [true, 'booking must belong to an appointment']
//   },
//   patientId: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Patient',
//     required: [true, 'booking must belong to a patient']
//   },
//   price: {
//     type: Number,
//     required: [true, 'booking must have a price']
//   },
//   paid: {
//     type: Boolean,
//     default: true
//   }
// },
// { timestamps: true }
// );

// bookingSchema.index({ appointmentId: 1, patientId: 1 }, { unique: true });

// bookingSchema.pre(/^find/, function(next) {
//   this.populate('patientId').populate('appointmentId');
//   next();
// });

// const Booking = mongoose.model('booking', bookingSchema);

// module.exports = Booking;
