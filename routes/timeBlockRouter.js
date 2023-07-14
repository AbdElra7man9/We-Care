const express = require('express');
const protect = require('../Middlewares/protect');
const acceptedDoctor = require('../Middlewares/acceptedDoctor');
const { addTimeBlock, getTimeBlocks } = require('../controllers/timeBlockController');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.route('/:id').get(getTimeBlocks);
router.use(protect, restrictTo('Doctor'), acceptedDoctor);
router.route('/').post(addTimeBlock);

module.exports = router;
