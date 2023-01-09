const mongoose = require("mongoose");
const joi = require("@hapi/joi");
// const bcrypt = require("bcrypt");

const userScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userScheme);


// userScheme.pre("save", async function (next) {
//     let salt = await bcrypt.genSalt(10); 
//     if (this.isModified("password")) {
//       this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
//   });
  
//   userScheme.methods.comparePassword = async function (password) {
//       return await bcrypt.compare(password, this.password);
//   }
  


function validateUserSignUp(data) {
  const schema = joi.object({
    name: joi.string().min(5).max(15).required(),
    email: joi.string().email().min(5).max(20).required(),
    password: joi.string().min(5).max(15).required(),
  });
  return schema.validate(data, { abortEarly: false });
}

function validateUserLogin(data) {
  const schema = joi.object({
    email: joi.string().email().min(5).max(20).required(),
    password: joi.string().min(5).max(15).required(),
  });
  return schema.validate(data, { abortEarly: false });
}




module.exports.User = User;
module.exports.validate = validateUserSignUp;
module.exports.validateLogin = validateUserLogin;
