const express = require('express');
const { NewMSG, GetMSGs, DeleteAllMSGs } = require('../Controllers/MessageCTRL');

const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect);
router.post('/:id', NewMSG);
router.get('/:id', GetMSGs);
router.delete('/deleteall/:id', DeleteAllMSGs);
module.exports = router;
