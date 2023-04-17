const express = require('express');
const protect = require('../Middlewares/protect');

const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.use(protect);
router.post('/:id', reviewController.makeReview);
router.get('/', reviewController.AllReview);
router.patch('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);
router.get('/patient', reviewController.patientReview);
router.get('/:id', reviewController.doctorReview);


module.exports = router;
