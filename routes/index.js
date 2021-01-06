var express = require("express");
var router = express.Router();

const LoginController = require("./../controllers/loginController");
const LoginService = require("./../services/loginService");

const LoginInstance = new LoginController(new LoginService());
const passport = require("passport");

const UserController = require("./../controllers/userController");
const UserService = require("./../services/userService");
const UserInstance = new UserController(new UserService());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hola");
});

router.post("/create", function (req, res) {
  UserInstance.create(req, res);
});

router.post("/login", passport.authenticate("local"), function (
  req,
  res,
  next
) {
  LoginInstance.logUser(req, res);
});

router.post("/verify", (req, res) => {
  if (req.user) {
    return res.json(req.user);
  } else {
    return res.sendStatus(401);
  }
});

module.exports = router;
