const express = require('express');
const { GetSignleChat, GetAll, NewChat } = require('../controllers/ChatCTRL');

const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect);
router.get('/all', GetAll);
router.get('/:id', GetSignleChat);
router.post('/:id', NewChat);

module.exports = router;
