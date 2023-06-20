const express = require('express');
const protect = require('../Middlewares/protect');

const {
  makeReview,
  updateReview,
  deleteReview,
  patientReview,
  doctorReview,
} = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/:id', doctorReview);
router.use(protect);
router.get('/patient', patientReview);
router.route('/:id').post(makeReview).patch(updateReview).delete(deleteReview);

module.exports = router;
