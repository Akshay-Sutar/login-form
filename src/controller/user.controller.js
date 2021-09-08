const userService = require("../service/user.service");
const UserService = require("../service/user.service");

class UserController {
  constructor() {
    this.login = this.login.bind(this);
  }

  async login(req, res, next) {
    const { name, password } = req.body;

    try {
      const user = await userService.authenticate(name, password);
      req.session.user = user;
      res.redirect("/home");
    } catch (err) {
      console.error(err);
      res.redirect("/login");
    }
  }
}

module.exports = new UserController();
