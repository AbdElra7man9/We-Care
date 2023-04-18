const express = require('express');
const { AllReview, DeleteReview } = require('../controllers/CoorController');
const protect = require('../Middlewares/protect');

const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router({ mergeParams: true });

router.use(protect, restrictTo('Patient'));

router.get('/all-reviews', AllReview);
router.delete('/delete-review/:id', DeleteReview);

module.exports = router;
