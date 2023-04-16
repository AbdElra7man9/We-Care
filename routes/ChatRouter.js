const express = require('express');
const {
    NewChat,
    GetAll,
    getSingleChat
} = require('../Controllers/ChatController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.get('/all', protect, GetAll);
router.get('/:id', protect, getSingleChat);
router.post('/:id', protect, NewChat);

module.exports = router;