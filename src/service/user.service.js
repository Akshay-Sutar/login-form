const mongoose = require('mongoose');
const LoginModel = require('../model/login.model');

class UserService {
  constructor() {
    this.authenticate = this.authenticate.bind(this);
  }

  async authenticate(name, pwd) {
    try {
        let user = null;
        const data = await LoginModel.findOne({name:name});
        
        if (data._id) {
            user = {
                id:data._id,
                name:data.name
            }; 
        }
        return user;
    } catch (err) {
        console.log(err);
    }
  }
}

module.exports = new UserService();
