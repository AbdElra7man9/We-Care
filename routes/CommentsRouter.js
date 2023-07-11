const express = require('express');
const {
  Like,
  NewComment,
  UnLike,
  GetComments,
  GetLikes,
} = require('../controllers/CommentsController');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.get('/comments/:id', GetComments);
router.get('/likes/:id', GetLikes);
router.post('/like/:id', protect, Like);
router.post('/unlike/:id', protect, UnLike);
router.post('/add-comment/:id', protect, NewComment);
module.exports = router;
