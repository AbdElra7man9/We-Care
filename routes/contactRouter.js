const express = require('express');
const protect = require('../Middlewares/protect');
const {
  newContact,
  getContacts,
  deleteContact,
} = require('../controllers/contactsController');
const restrictTo = require('../Middlewares/restrictTo');
const router = express.Router();

router.use(protect);
router.post('/', newContact);
router.use(restrictTo('Coordinator'));
router.get('/', getContacts);
router.delete('/:contactId', deleteContact);

module.exports = router;
