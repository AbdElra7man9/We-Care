const express = require('express');
const {
  Like,
  NewComment,
  UnLike,
} = require('../controllers/CommentsController');
const { protect } = require('../Middlewares/authentication');

const router = express.Router();

router.use(protect);
router.post('/like/:id', Like);
router.post('/unlike/:id', UnLike);
router.post('/add-comment/:id', NewComment);
module.exports = router;
