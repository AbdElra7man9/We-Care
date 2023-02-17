const express = require('express');

const {
  userLogin,
  protect,
  updatePassword,
  forgotPassword,
  resetPassword,
} = require('../controllers/authController');
const updateInfo = require('../controllers/userController');

const router = express.Router();

router.post('/login', userLogin);

router.patch('/updateInfo', protect, updateInfo);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);

module.exports = router;
