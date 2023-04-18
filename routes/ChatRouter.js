const express = require('express');
const {
  NewChat,
  GetAll,
  getSingleChat,
} = require('../controllers/ChatCTRL');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect);
router.get('/all', GetAll);
router.get('/:id', getSingleChat);
router.post('/:id', NewChat);

module.exports = router;
