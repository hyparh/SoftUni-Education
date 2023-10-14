const bcrypt = require("bcrypt");

const jwt = require("../lib/jwt");
const User = require("../models/User");
const SECRET = "5cd2ac35-2722-4ea4-a30b-9a0befa782b3";

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid username or password");
  }

  const payload = {
    _id: user._id,
    username: user.username,
    email: user.email,
  };

  const token = await jwt.sign(payload, SECRET, { expiresIn: "2d" });

  return token;
};

exports.register = async (userData) => {
  const user = await User.findOne({ userData: userData.username });
  if (user) {
    throw new Error("Username already exists");
  }

  return User.create(userData);
};
