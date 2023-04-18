const express = require('express');
const {
  NewBlog,
  DeleteBLOG,
  userBLOG,
  userBlogById,
  AllBlogs,
  GetBlogDetails,
} = require('../Controllers/BlogController');

const restrictTo = require('../Middlewares/restrictTo');
const protect = require('../Middlewares/protect');

const router = express.Router();

router.use(protect); // for best practice you can add router only one :)
router.post('/', NewBlog);
router.delete('/', DeleteBLOG);
router.get('/user', userBLOG);
router.get('/:id', userBlogById);
router.get('/', AllBlogs);
router.get('/details/:id', GetBlogDetails);
module.exports = router;
