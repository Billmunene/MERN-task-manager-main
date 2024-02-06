const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { ACCESS_TOKEN_SECRET } = process.env;

// Function to handle errors
const handleError = (res, statusCode, message) => {
  return res.status(statusCode).json({ status: false, msg: message });
};

exports.verifyAccessToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return handleError(res, 400, "Token not found");

  let user;
  try {
    user = jwt.verify(token, ACCESS_TOKEN_SECRET);
  } catch (err) {
    return handleError(res, 401, "Invalid token");
  }

  try {
    user = await User.findById(user.id);
    if (!user) {
      return handleError(res, 401, "User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return handleError(res, 500, "Internal Server Error");
  }
};
