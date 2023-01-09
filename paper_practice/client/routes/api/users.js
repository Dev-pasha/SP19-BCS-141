const express = require("express");
const router = express.Router();
const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
// const _ = require('loadash')
const jwt = require("jsonwebtoken");
const config = require("config");

// register request
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email }).select("-password");
  if (user) {
    res.status(403).json({
      status: "false",
      message: "User already registered",
    });
  }

  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  let salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();

  res.status(200).json({
    status: "success",
    message: "User Registered successfully",
    user: {
      name: user.name,
      email: user.email,
    },
  });
});

// login request
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(403).json({
      status: "false",
      message: "User not registered",
    });
  }
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    return res.status(403).json({
      status: "false",
      message: "Invalid password",
    });
  }

  let token = jwt.sign({ _id: user._id, name: user.name}, config.get('jwtSecret'));

  res.status(200).json({
    status: "success",
    message: "User logged in successfully",
   token,
  });
});

// get all users
router.get("/", async (req, res) => {
  const user = await User.find();
  res.status(200).json({
    status: "success",
    results: user.length,
    data: {
      user,
    },
  });
});

//

module.exports = router;
