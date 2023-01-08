const express = require("express");
const {
  register,
  loginUser,
  followUser,
  logoutUser,
  updatePassword,
  updateProfile,
  deleteProfile,
  myProfile,
  getUserProfile,
  getUsers,
} = require("../controllers/userController");
const { isauthenticated } = require("../middlewares/authentication");

const router = express.Router();

// controllers export conncetion to database
router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/follow/:id").get(isauthenticated, followUser);
router.route("/logout").get(isauthenticated, logoutUser);
router.route("/update/password").put(isauthenticated, updatePassword);
router.route("/update/profile").put(isauthenticated, updateProfile);
router.route("/delete/me").delete(isauthenticated, deleteProfile);
router.route("/me").get(isauthenticated, myProfile);
router.route("/user/:id").get(isauthenticated, getUserProfile);
router.route("/users").get(isauthenticated, getUsers);

module.exports = router;
