const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.isauthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Please login first",
      });
    }
    // verify the token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    // find user by id
    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    res.status(503).json({
      success: false,
      message: err.message,
    });
  }
};

// // is user authenticated or not
// exports.isauthenticated = async (req, res, next) => {
//     try {
//       const {token} = req.cookies;
//     // catch the token from the cookies
//     // if token is not present
//     console.log(token);
//     console.log(req.cookies);
//     console.log("this piece of code running");

//     // if (!token) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "Please login first",
//     //   });
//     // }
//     // verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // find user by id
//     const user = await User.findById(decoded.id);

//     // if user is not found
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
