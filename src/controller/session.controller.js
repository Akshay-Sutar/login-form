const UserService = require('./user.controller');

class SessionController {
  constructor() {
    this.checkHasActiveSession = this.checkHasActiveSession.bind(this);
  }

  checkHasActiveSession(req, res, next) {
    if (req.session.user.id) {
        next();
    } else {
        res.redirect('/login');
    }
  }
}

module.exports = new SessionController();
