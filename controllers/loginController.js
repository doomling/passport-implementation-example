const passport = require("passport");

class LoginController {
  constructor(loginService) {
    this.loginService = loginService;
  }

  async logUser(req, res) {
    return res.json(req.user);
  }
}

module.exports = LoginController;
