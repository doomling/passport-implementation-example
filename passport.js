// esto tercero

const LoginService = require("./services/loginService");
const LoginInstance = new LoginService();
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password"
    },
    async (username, password, cb) => {
      const userData = await LoginInstance.logUser({ name: username });

      if (!userData) {
        return cb(null, false);
      }

      bcrypt.hash(userData.password, 10).then(hash => {
        data.password = hash;
        bcrypt.compare(password, hash);
        return cb(null, false);
      });

      const data = {
        _id: userData._id,
        name: userData.name
      };
      return cb(null, data);
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.name);
});

passport.deserializeUser((user, cb) => {
  LoginInstance.logUser({ name: user }).then(userData => {
    const data = {
      _id: userData._id,
      name: userData.name
    };
    cb(null, data);
  });
});
