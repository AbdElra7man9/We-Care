const express = require('express');
const {protect} = require('../controllers/authController');

const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });


router.post('/:id', protect, reviewController.makeReview);
router.get('/', protect, reviewController.AllReview);
router.patch('/:id', protect, reviewController.updateReview);
router.delete('/:id', protect, reviewController.deleteReview);
router.get('/patient', protect, reviewController.patientReview);
router.get('/:id', reviewController.doctorReview);


module.exports = router;


