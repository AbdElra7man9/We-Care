const express = require('express');
const { Like, NewComment, UnLike } = require('../controllers/CommentsController');
const { protect } = require('../controllers/authController');

const router = express.Router();


router.post('/like/:id', protect, Like);
router.post('/unlike/:id', protect, UnLike);
router.post('/add-comment/:id', protect, NewComment);
module.exports = router
