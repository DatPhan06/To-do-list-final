class AuthController {
  static async login(req, res) {
    res.render("login");
  }

  static async register(req, res) {
    res.render("register");
  }

  static async resultlogin(req, res) {
    console.log(req.body);
    res.redirect("/home");
  }

  static async resultregister(req, res) {
    res.redirect("/home");
  }
}

module.exports = AuthController;
