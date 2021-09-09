const LoginModel = require("../model/login.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserService {
  constructor() {
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(name, password) {
    try {
      let user = null;
      const data = await LoginModel.findOne({ name: name });

      if (data._id) {
        const hashedPwd = data.password;
        const verified = await bcrypt.compare(password, hashedPwd);
        if (verified) {
          user = {
            id: data._id,
            name: data.name,
          };
        }
      }
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async register(name, password) {
    try {
      const hashedPwd = await bcrypt.hash(password, saltRounds);
      let user = null;
      let model = {
        name,
        password: hashedPwd,
      };
      const data = await LoginModel.create(model);

      if (data._id) {
        user = {
          id: data._id,
          name: data.name,
        };
      }
      return user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

module.exports = new UserService();
