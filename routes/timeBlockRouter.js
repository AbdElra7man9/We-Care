const express = require('express');
const protect = require('../Middlewares/protect');
const { addTimeBlock } = require('../controllers/timeBlockController');
const restrictTo = require('../Middlewares/restrictTo');

const router = express.Router();

router.use(protect, restrictTo('Doctor'));
router.route('/').post(addTimeBlock);

module.exports = router;
