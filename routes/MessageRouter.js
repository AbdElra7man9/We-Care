const express = require('express');
const { new_MSG, get_MSGs, DeleteAllMSGs } = require('../Controllers/MessageController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.post('/:id', protect, new_MSG)
router.get('/:id', protect, get_MSGs)
router.delete('/deleteall/:id', protect, DeleteAllMSGs)
module.exports = router