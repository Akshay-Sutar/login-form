const { Router } = require("express");
const UserController = require("../controller/user.controller");
const SessionController = require("../controller/session.controller");

const router = Router();

router.get("/", SessionController.checkHasActiveSession, (req, res) => {
  res.redirect("/home");
});

router.get("/home", SessionController.checkHasActiveSession, (req, res) => {
  res.render("./pages/home");
});

router.get("/login", (req, res) => {
  res.render("./pages/login");
});

router.post("/login", UserController.login);

module.exports = router;
