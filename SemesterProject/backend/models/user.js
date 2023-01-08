const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "This email is already registered"],
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Minimum password length is 6 characters"],
    select: false,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

// Encrypt password before saving user
userSchema.pre("save", async function (next) {
  // this will refer to the current document being saved
  // this.isModified() will check if the password is modified or not
  // if the password is modified then only it will be encrypted
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

  // Compare password
userSchema.methods.matchPassword = async function (password) {
  // password is the password entered by the user
  // this.password is the password stored in the database
  // bcrypt.compare() will compare both the passwords
  return await bcrypt.compare(password, this.password);
};

// generate token
userSchema.methods.generateToken = function () {
// jwt.sign() will generate a token
// id is the id of the user
// _id is the id of the user stored in the database
// process.env.JWT_SECRET is the secret key
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("User", userSchema);
