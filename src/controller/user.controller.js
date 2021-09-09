const userService = require("../service/user.service");
class UserController {
  constructor() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async login(req, res, next) {
    const { name, password } = req.body;

    try {
      const user = await userService.authenticate(name, password);
      req.session.user = user;
      res.redirect("/home");
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async register(req, res, next) {
    const { name, password } = req.body;
    try {
      const user = await userService.register(name, password);
      if (user) {
        req.session.user = user;
        res.redirect("/home");
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new UserController();
