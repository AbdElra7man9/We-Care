const express = require('express');
const {
    NewChat,
    GetAll,
    getSingleChat
} = require('../Controllers/ChatController');
const { protect } = require('../controllers/authController');
const { hasRight } = require('../Middlewares/doctor');

const router = express.Router();

router.get('/all', protect, GetAll);
router.get('/:id', protect, getSingleChat);
router.post('/:id', protect, hasRight, NewChat);
module.exports = router;