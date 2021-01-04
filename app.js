var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();
const session = require("express-session");
// primero controller, ruta, service y modelo
// despues esto
const passport = require("passport");
const passportConfig = require("./passport");

const sessionMiddleware = session({
  name: "courseit-test",
  secret: "s3cr3t$",
  saveUninitialized: false,
  resave: false
});

app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));
// app.use(cookieParser());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
