const express = require('express');
const {protect} = require('../controllers/authController');

const reviewController = require('../controllers/reviewController');

const router = express.Router();


router.post('/makereview/:id', protect, reviewController.makeReview);



module.exports = router;


