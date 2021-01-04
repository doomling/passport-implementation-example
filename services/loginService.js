const User = require("./../models/userModel");

class LoginService {
  logUser(data) {
    const query = User.findOne({ name: data.name }).exec();
    return query;
  }
}

module.exports = LoginService;
