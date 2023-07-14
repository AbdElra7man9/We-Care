const Review = require('../Models/reviewModel');
const Doctor = require('../Models/doctorModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Features = require('../utils/Features');
const Patient = require('../Models/patientModel');
const Coordinator = require('../Models/coordinatorModel');
const nodemailer = require('nodemailer');

exports.acceptDoctor = (req, res, next) => { };
exports.AllReview = catchAsync(async function (req, res, next) {
  const features = new Features(Review.find(), req.query).Paginate();

  const reviews = await features.query;

  if (reviews.length == 0)
    return next(new AppError('there is no reviews here', 401));

  res.json({
    status: 'success',
    results: reviews.length,
    reviews,
  });
});

exports.DeleteReview = catchAsync(async function (req, res, next) {
  await Review.deleteOne({ _id: req.params.id })
    .then(() => {
      return res.json({
        status: "success",
        message: "Deleted !"
      })
    })
    .catch((error) => { return next(new AppError(error.message, 500)) })
});
exports.countUsers = catchAsync(async function (req, res, next) {
  Doctor.countDocuments();
  Patient.countDocuments();
  Coordinator.countDocuments();
});

function sendEmail(email, subject, text) {
  const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
          user: 're00zq@outlook.com',
          pass: 'mahmoud1Q2W3E#',
      },
  });

  var mailOptions = {
      from: 're00zq@outlook.com',
      to: email,
      subject,
      text,
    // html: '<h1>test</h1>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
      console.log(error);
      } else {
      console.log(`Email sent: ${info.response}`);
      }
  });
};

exports.sendEmail = catchAsync(async function (req, res, next) {
  const { email, subject, text } = req.body;
  try {
      sendEmail(email, subject, text);
  } catch (err) {
      console.log("2")
      return next(
          new AppError('faild'),
          500
      );
      }
  });