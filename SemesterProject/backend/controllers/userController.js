const User = require("../models/user");
const Post = require("../models/post");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }
    user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: "avatars/1",
        url: "sampleurl",
      },
    });
    console.log(user);

    res.status(200).json({
      success: true,
      message: "User Registered successfully",
      user,
    });
    // const token = await loginUser.generateToken();
    // const cookieOptions = {
    //   expires: new Date(Date.now() + 2592000000),
    //   httpOnly: true,
    // };
    // res.status(200).cookie("token",token,cookieOptions).json({
    //   success: true,
    //   message: "User Registered and logged in successfully",
    //   loginUser,
    //   token,
    // });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exisist",
      });
    }

    const passMatched = await user.matchPassword(password);
    if (!passMatched) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = await user.generateToken();
    const cookieOptions = {
      expires: new Date(Date.now() + 2592000000),
      httpOnly: true,
    };
    res.status(200).cookie("token", token, cookieOptions).json({
      success: true,
      message: "User logged in successfully",
      user,
      token,
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {

    res.status(200).cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    }).json({
      success: true,
      message: "User logged out successfully",
      });
    
  }
  catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};


exports.followUser = async (req, res) => {
  try {
    const usertoFollow = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id);
    if (!usertoFollow) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (usertoFollow._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot follow yourself",
      });
    }

    if (loggedInUser.following.includes(usertoFollow._id)) {
      const indexOfFollowing = loggedInUser.following.indexOf(usertoFollow._id);
      const indexOfFollower = usertoFollow.followers.indexOf(loggedInUser._id);
      loggedInUser.following.splice(indexOfFollowing._id);
      usertoFollow.followers.splice(indexOfFollower._id);
      await loggedInUser.save();
      await usertoFollow.save();

      return res.status(400).json({
        success: false,
        message: "Successfully unfollowed",
      });
    } else {
      loggedInUser.following.push(usertoFollow._id);
      usertoFollow.followers.push(loggedInUser._id);

      await loggedInUser.save();
      await usertoFollow.save();

      res.status(200).json({
        success: true,
        message: "User followed successfully",
      });
    }
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};


exports.updatePassword = async (req, res) => {
  try{
    const user = await User.findById(req.user._id).select("+password");
    const {oldPassword, newPassword} = req.body;
    const isMatched = await user.matchPassword(oldPassword);
    if(!isMatched){
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }
    user.password = newPassword;
    await user.save();  
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });


  }
  catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};


exports.updateProfile = async (req, res) => {
  try{
    const user = await User.findById(req.user._id);
    const {name, email} = req.body;
    if(name)
    {
      user.name = name;
    }
    if(email)
    {
      user.email = email;
    }
    await user.save();
    
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user
    });
  }
  catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteProfile = async (req, res) => {
  try{
    const user = await User.findById(req.user._id);
    const userPosts =user.posts;
    const userFollower = user.followers;
    const userFollowing = user.following;
    const userID = user._id;

    if(!user)
    {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    await user.remove();
    // logout user after deleting profile
    res.status(200).cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    }).json({
      success: true,
      message: "User logged out successfully",
      });

    // delete all posts of user
    for(let i=0;i<userPosts.length;i++)
    {
      const post = await Post.findById(userPosts[i]);
      await post.remove();
    }

    // delete user from followers list of all users
    for(let i=0;i<userFollower.length;i++)
    {
      const follower = await User.findById(userFollower[i]);

      const indexOfFollower = follower.following.indexOf(userID);
      follower.following.splice(indexOfFollower._id);
      await follower.save();
    }

    // delete user from followers list of all users
    for(let i=0;i<userFollowing.length;i++)
    {
      const follower = await User.findById(userFollowing[i]);
      const indexOfFollowing = follower.followers.indexOf(userID);
      follower.followers.splice(indexOfFollowing._id);
      await follower.save();
      
   
    }

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  }
  catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
}


exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("posts");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      user:users,
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
};

exports.myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (err) {
    res.status(502).json({
      success: false,
      message: err.message,
    });
  }
}