const User = require("../models/User");

const bcrypt = require("bcrypt");

exports.login = async (username, password) => {
  const user = await User.findOneByUsername({ username });

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Invalid username or password");
  }

  
};

exports.register = async (userData) => {
  const user = await User.findOne({ userData: userData.username });
  if (user) {
    throw new Error("Username already exists");
  }

  return User.create(userData);
};
