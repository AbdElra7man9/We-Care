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

const router = express.Router();

router.post('/', protect, NewBlog);
router.delete('/', protect, DeleteBLOG);
router.get('/user', protect, userBLOG);
router.get('/:id', protect, userBlogById);
router.get('/', protect, AllBlogs);
router.get('/:id', protect, GetBlogDetails);
module.exports = router
