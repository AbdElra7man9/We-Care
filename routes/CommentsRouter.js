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
router.use(protect);
router.post('/like/:id', Like);
router.post('/unlike/:id', UnLike);
router.post('/add-comment/:id', NewComment);
module.exports = router;
