const express = require('express');
const { Like, NewComment, UnLike } = require('../controllers/CommentsController');
const { protect } = require('../controllers/authController');

const router = express.Router();


router.post('/like', protect, Like);
router.post('/unlike', protect, UnLike);
router.post('/add-comment', protect, NewComment);
module.exports = router
