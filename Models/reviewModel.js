const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
    required : true
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: 'Doctor',
    required : true
  },
  rating: {
      type: Number,
      required: true,
      enum : [ 1 , 2 , 3 , 4 , 5 ] ,
  }, 
  comment: {
      type: String,
      maxlength: 255
  },
},
{timestamps : true });


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;