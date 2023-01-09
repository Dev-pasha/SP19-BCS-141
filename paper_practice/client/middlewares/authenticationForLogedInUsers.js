const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    let user = jwt.verify(token, config.get("jwtSecret"));
    req.user = user;
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }

  next();
}

module.exports = auth;
