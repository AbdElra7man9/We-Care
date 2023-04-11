const express = require('express');
const {
    New_Chat,
    Get_ALL,
    Get_Single_Chat
} = require('../Controllers/ChatController');
const { protect } = require('../controllers/authController');
const { hasRight } = require('../Middlewares/doctor');

const router = express.Router();

router.get('/all', protect, Get_ALL);
router.get('/:id', protect, Get_Single_Chat);
router.post('/:id', protect, hasRight, New_Chat);
module.exports = router;
