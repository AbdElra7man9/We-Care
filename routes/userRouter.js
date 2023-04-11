const express = require('express');

const {
  userLogin,
  protect,
  updatePassword,
  forgotPassword,
  resetPassword,
  emailConfirmation,
  Refresh,
} = require('../controllers/authController');
const { updateInfo, deleteMe } = require('../controllers/userController');

const router = express.Router();

router.post('/login', userLogin);
router.get('/refresh', Refresh);
router.post('/forgotPassword', forgotPassword);
// routes need to authentication
router.use(protect);
router.patch('/resetPassword/:token', resetPassword);
router.post('/emailConfirmation', emailConfirmation);
router.patch('/updateInfo', updateInfo);
router.patch('/updatePassword', updatePassword);
router.delete('/deleteMe', deleteMe);

module.exports = router;
