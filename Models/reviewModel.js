const mongoose = require('mongoose');
const Doctor = require('../Models/doctorModel');

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
{timestamps : true },
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

reviewSchema.index({ doctor:1 , patient: 1}, {unique: true});

reviewSchema.pre(/^find/, function(next){
  this.populate({
    path: 'doctor',
    select: 'name profilePicture'
  }).populate({
    path: 'patient',
    select: 'name profilePicture'
  });

  next();
});

reviewSchema.statics.calcAverageRatings = async function(doctorId){
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId}
    },
    {
      $group: {
        _id: '$doctor',
        nRating: {$sum:1},
        avgRating: { $avg: '$rating'}
      }
    }
  ]);

  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId,{
      numberOfRating: stats[0].nRating,
      averageRating: stats[0].avgRating
    });
  } else {
    await Doctor.findByIdAndUpdate(doctorId,{
      numberOfRating: 0,
      averageRating: 0
    });
  }
};

reviewSchema.post('save' , function() {
  this.constructor.calcAverageRatings(this.doctor);
});


reviewSchema.pre(/^findOneAnd/ , async function(next) {
  this.r = await this.findOne().clone();
  next();
});

reviewSchema.post(/^findOneAnd/ , async function() {
  await this.r.constructor.calcAverageRatings(this.r.doctor._id);
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;