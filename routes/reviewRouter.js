const express = require('express');
const { protect } = require('../Middlewares/authentication');

const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/doctorreviews/:id', reviewController.doctorReview);

router.use(protect);
router.post('/makereview/:id', reviewController.makeReview);
router.patch('/updatereview/:id', reviewController.updateReview);
router.delete('/deletereview/:id', reviewController.deleteReview);
router.get('/patientreviews', reviewController.patientReview);

module.exports = router;
