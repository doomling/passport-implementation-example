const User = require("./../models/userModel");
const bcrypt = require("bcrypt");

class UserService {
  create(data) {
    
    return bcrypt.hash(data.password, 10).then(hash => {
      data.password = hash;
      const newUser = new User(data);

      return newUser.save();
    });
  }
}

module.exports = UserService;
