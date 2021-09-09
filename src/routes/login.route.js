const { Router } = require("express");
const UserController = require("../controller/user.controller");
const SessionController = require("../controller/session.controller");

const router = Router();

router.get("/login", (req, res) => {
  res.render("./pages/login");
});

router.get("/register", (req, res) => {
  res.render("./pages/register");
});

router.post("/login", UserController.login);

router.post("/register", UserController.register);

module.exports = router;
