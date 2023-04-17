const express = require('express');
const {
  new_MSG,
  get_MSGs,
  DeleteAllMSGs,
} = require('../Controllers/MessageController');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect);
router.post('/:id', new_MSG);
router.get('/:id', get_MSGs);
router.delete('/deleteall/:id', DeleteAllMSGs);
module.exports = router;
