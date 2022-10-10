import cookie from 'js-cookie'

class Auth {
  constructor() {
    try {
      const checkLogin = localStorage.getItem("login")
      const checkToken = cookie.get("token")

      if (checkToken === undefined) {
        this.authenticated = false;
      } else {
        if (checkLogin === 'true') {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }
    } catch (err) {
      this.authenticated = false;
    }
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    localStorage.removeItem("login")
    cookie.remove("token")
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
