const mongoose = require('mongoose');

const timeBlockSchema = mongoose.Schema({
  period: {
    type: Number,
    required: true,
    max: [5, 'the max period you can add is 5 hours'],
    min: [1, 'the min period you can add is 1 hour'],
    default: 1,
  },
  startTime: {
    type: Date,
    min: [Date.now(), "you can't add time in past"],
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['video call', 'visit', 'chat'],
    default: 'video call',
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Doctor',
  },
});

const timeBlock = mongoose.model('timeBlock', timeBlockSchema);

module.exports = timeBlock;
