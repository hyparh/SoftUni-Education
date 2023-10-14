const User = require("../models/User");

exports.login = (username, password) => {};

exports.register = async (userData) => {
  const user = User.findOne({ userData: userData.username });
  if (user) {
    throw new Error('Username already exists');
  }

  return User.create(userData);
};
