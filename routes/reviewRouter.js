const express = require('express');
const protect = require('../Middlewares/protect');
const restrictTo = require('../Middlewares/restrictTo');

const {
  makeReview,
  updateReview,
  deleteReview,
  patientReview,
  doctorReview,
  doctorLogedReviews,
} = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/doctor/:id', doctorReview);
router.get('/doctor',protect, doctorLogedReviews);

router.use(protect);
router.get('/patient', patientReview);
router.use(restrictTo('Patient'));
router.route('/:id').post(makeReview).patch(updateReview).delete(deleteReview);

module.exports = router;
