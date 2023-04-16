const express = require('express');
const {protect} = require('../controllers/authController');

const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });


router.post('/makereview/:id', protect, reviewController.makeReview);
router.patch('/updatereview/:id', protect, reviewController.updateReview);
router.delete('/deletereview/:id', protect, reviewController.deleteReview);
router.get('/patientreviews', protect, reviewController.patientReview);
router.get('/doctorreviews/:id', reviewController.doctorReview);


module.exports = router;


