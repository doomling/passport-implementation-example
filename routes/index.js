var express = require("express");
var router = express.Router();

const LoginController = require("./../controllers/loginController");
const LoginService = require("./../services/loginService");

const LoginInstance = new LoginController(new LoginService());
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
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
