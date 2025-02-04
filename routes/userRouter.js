const express = require('express');
const restrictTo = require('../Middlewares/restrictTo');
const {
  userLogin,
  updatePassword,
  forgotPassword,
  resetPassword,
  emailConfirmation,
  Refresh,
  resendPIN,
  signOut,
} = require('../controllers/authController');
const {
  updateInfo,
  deleteMe,
  getUser,
  getMyData,
} = require('../controllers/userController');
const protect = require('../Middlewares/protect');
const mustConfirmed = require('../Middlewares/mustConfirmed');
const uploadUserPhoto = require('../Middlewares/uploadUserPhoto');
const resizeImage = require('../Middlewares/resizeImage');

const router = express.Router();

router.post('/login', userLogin);
router.post('/logout', signOut);
router.get('/refresh', Refresh);
router.post('/forgotPassword', forgotPassword);
// routes need to authentication
router.use(protect);
router.get('/myData', getMyData);
router.post('/emailConfirmation', emailConfirmation);
router.post('/resendPin', resendPIN);
router.use(mustConfirmed);
router.patch('/resetPassword/:token', resetPassword);
router.patch(
  '/updateInfo',
  uploadUserPhoto,
  resizeImage(500, 500, 'users', 'user'),
  updateInfo
);
router.patch('/updatePassword', updatePassword);
router.delete('/deleteMe', deleteMe);
router.get('/:username', getUser);

module.exports = router;
