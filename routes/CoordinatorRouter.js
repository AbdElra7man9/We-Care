const express = require('express');
const { AllReview, DeleteReview, sendEmail } = require('../controllers/CoorController');
const { getAllPatients } = require('../controllers/CoorController');
const protect = require('../Middlewares/protect');

const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router({ mergeParams: true });

router.use(protect, restrictTo('Coordinator'));

router.get('/all-reviews', AllReview);
router.delete('/delete-review/:id', DeleteReview);
router.post('/email', sendEmail);
module.exports = router;
