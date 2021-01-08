function isAdmin(req, res, next) {
  console.log(req.user);
  if (req.user.isAdmin) {
    console.log("si");
    next();
  } else {
    console.log("no", req.user);
    res.status(403).send();
  }
}

module.exports = isAdmin;
