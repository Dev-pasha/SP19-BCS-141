const express = require("express");
const Post = require("../models/post");
const User = require("../models/user");

// create post
exports.createPost = async (req, res) => {
  try {
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "req.body.image.public_id",
        url: "req.body.image.url",
      },
      owner: req.user._id,
    };
    const post = await Post.create(newPostData);
    const user = await User.findById(req.user._id);
    user.posts.push(post._id);
    await user.save();    

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      post,
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message + " post created catch block",
    });
  }
};

// delete post
exports.deletePost =async (req, res) => {
  try{
    const post = await Post.findById(req.params.id);
    if(!post){
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    if(post.owner.toString() !== req.user._id.toString()){
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this post",
      });
    }
    await post.remove();

    const user = await User.findById(req.user._id);
    // indexOf returns the index of the element in the array

    const postIndex = user.posts.indexOf(req.params.id);
    // splice removes the element from the array at the given index and the second argument is the number of elements to be removed
    user.posts.splice(postIndex, 1);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });

  }
  catch(err){
    res.status(502).json({
      success: false,
      message: err.message + " post created catch block",
    });
  }




}


exports.updatepost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    if (post.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this post",
      });
    }
    post.caption = req.body.caption;
    await post.save();
    res.status(200).json({
      success: true,
      message: "Post updated successfully",
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message + " post created catch block",
    });
  }
}; 

//  get all posts of the following users
exports.getPostOftheFollowingUsers = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
    // The $in operator is a MongoDB operator that allows you to specify an array of values to be matched against a field.
    const post  = await Post.find({owner:{$in:user.following}})
    res.status(200).json({
      success: true,
      post:post.reverse(),
      });
  }
  catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
}; 

// like unlike post
exports.likeUnlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
        // includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    if (post.likes.includes(req.user._id)) {
      const alreadyliked = post.likes.indexOf(req.user._id);
      // splice remove the match object from the array
      post.likes.splice(alreadyliked, 1);
      await post.save();
      res.status(200).json({
        success: true,
        message: "Post Unliked successfully",
      });

    } 
    
    else {
      post.likes.push(req.user._id);
      await post.save();
      res.status(200).json({
        success: true,
        message: "Post liked successfully",
      });
    }
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};

// add comment
