const jwt = require("../lib/jwt");

const { SECRET } = require("../config/config");

exports.auth = async (req, res, next) => {
  const token = req.cookies["token"];

  if (token) {
    try {
      const decodedToken = await jwt.verify(SECRET);

      next();
    } catch (err) {

    }
  } else {
    next();
  }
};
