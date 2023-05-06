const express = require('express');
const protect = require('../Middlewares/protect');

const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.get('/:id', reviewController.doctorReview);
router.use(protect);
router.post('/:id', reviewController.makeReview);
router.patch('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);
router.get('/patient', reviewController.patientReview);


module.exports = router;
