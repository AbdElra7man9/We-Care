const express = require('express');

const {
  userLogin,
  protect,
  updatePassword,
  forgotPassword,
  resetPassword,
  emailConfirmation,
} = require('../controllers/authController');
const { updateInfo, deleteMe } = require('../controllers/userController');

const router = express.Router();

router.post('/login', userLogin);
router.post('/emailConfirmation', protect, emailConfirmation);
router.patch('/updateInfo', protect, updateInfo);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updatePassword', protect, updatePassword);
router.delete('/deleteMe', protect, deleteMe);

module.exports = router;
