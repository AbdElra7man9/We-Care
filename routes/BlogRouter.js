const express = require('express');
const { protect } = require('../controllers/authController');
const {
    NewBlog,
    DeleteBLOG,
    userBLOG,
    userBlogById,
    AllBlogs,
    GetBlogDetails,
} = require('../Controllers/BlogController');

const { restrictTo } = require('../Middlewares/doctor');
const router = express.Router();

router.post('/', protect, restrictTo('Doctor'), NewBlog);
router.delete('/', protect, restrictTo('Doctor'), DeleteBLOG);
router.get('/user', protect, restrictTo('Doctor'), userBLOG);
router.get('/:id', protect, restrictTo('Doctor'), userBlogById);
router.get('/', protect, restrictTo('Doctor'), AllBlogs);
router.get('/details/:id', protect, restrictTo('Doctor'), GetBlogDetails);
module.exports = router
