const express = require('express');
const {protect} = require('../controllers/authController');

const reviewController = require('../controllers/reviewController');

const router = express.Router();


router.post('/makereview/:id', protect, reviewController.makeReview);
router.patch('/updatereview/:id', protect, reviewController.updateReview);
router.delete('/deletereview/:id', protect, reviewController.deleteReview);


module.exports = router;


