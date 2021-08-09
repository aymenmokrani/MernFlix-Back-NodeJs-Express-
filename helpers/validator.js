const { check } = require("express-validator");

module.exports.validRegister = [
  check("name", "Name must be at least 6 characters length")
    .notEmpty()
    .isLength({ min: 6 }),
  check("email", "please enter a valid email ").notEmpty().isEmail(),
  check("password", "password must be at least 6 characters length")
    .notEmpty()
    .isLength({ min: 4, max: 16 }),
];

module.exports.validLogin = [
  check("email", "please enter a valid email ").notEmpty().isEmail(),
  check("password", "password must be between 6 caracters length")
    .notEmpty()
    .isLength({ min: 4, max: 16 }),
];
