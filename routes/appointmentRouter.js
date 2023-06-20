const express = require('express');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect);

module.exports = router;
