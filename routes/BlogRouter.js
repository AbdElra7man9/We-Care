const express = require('express');
const {
  NewBlog,
  DeleteBLOG,
  userBLOG,
  userBlogById,
  AllBlogs,
  GetBlogDetails,
} = require('../controllers/BlogController');

const restrictTo = require('../Middlewares/restrictTo');
const protect = require('../Middlewares/protect');

const router = express.Router();
router.get(AllBlogs);
router.use(protect, restrictTo('Doctor', 'Coordinator')); // for best practice you can add router only one :)
router.route('/').post(NewBlog).delete(DeleteBLOG);
router.get('/user', userBLOG);
router.get('/:id', userBlogById);
router.get('/details/:id', GetBlogDetails);
module.exports = router;
