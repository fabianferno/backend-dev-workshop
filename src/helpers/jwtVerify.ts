let jwt = require("jsonwebtoken");

let checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase
  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(
      token,
      "N4ClogES5kHchz2C10VljjdLiOHa0rKQr3cFOtW9mt8UAbAB30",
      (err, decoded) => {
        if (err) {
          return res.json({
            message: "Token is not valid",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      }
    );
  } else {
    return res.json({
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
