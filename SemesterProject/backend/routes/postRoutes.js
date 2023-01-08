const express  = require('express');
const Post = require('../models/post');
const User = require('../models/user');
const { createPost ,likeUnlikePost, getPostOftheFollowingUsers, updatepost ,deletePost} = require('../controllers/postController');
const { isauthenticated } = require('../middlewares/authentication');
const router = express.Router();

// controllers export conncetion to database
router.route('/post/upload').post(isauthenticated, createPost);
router.route('/post/:id').get(isauthenticated, likeUnlikePost).put(isauthenticated,updatepost).delete(isauthenticated, deletePost);
router.route('/posts').get(isauthenticated, getPostOftheFollowingUsers);




module.exports = router;