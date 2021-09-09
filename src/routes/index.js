const { Router } = require("express");
const UserController = require("../controller/user.controller");
const SessionController = require("../controller/session.controller");

const router = Router();

router.get("/", SessionController.checkHasActiveSession, (req, res) => {
  res.redirect("/home");
});

router.get("/home", SessionController.checkHasActiveSession, (req, res) => {
  res.render("./pages/home",{name: req.session.user.name});
});

router.use(require('./login.route'));

module.exports = router;
