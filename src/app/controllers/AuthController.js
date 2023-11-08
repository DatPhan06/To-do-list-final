const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const User = require("../models/User")(sequelize, DataTypes);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

class AuthController {
  static async login(req, res) {
    res.render("login");
  }

  static async register(req, res) {
    console.log(req.body);
    res.render("register");
  }

  static async resultlogin(req, res) {
    console.log(req.body);

    try {
      const user = await User.findOne({
        where: { username: req.body.username }, // Sử dụng req.body thay vì req.params
      });

      if (!user) {
        return res.json("Tài khoản không tồn tại");
      }

      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (passwordMatch) {
        // Tạo JWT khi đăng nhập thành công
        const token = jwt.sign({ userId: user.id }, "your-secret-key", {
          expiresIn: "1h",
        });

        res.cookie("token", token);

        return res.redirect("/home");
      } else {
        return res.json("Nhập sai mật khẩu");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi đăng nhập" });
    }
  }

  static async resultregister(req, res) {
    try {
      const { username, password, passwordconfirm } = req.body;
      if (password !== passwordconfirm) {
        return res.send({ error: "Passwords do not match" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ username, password: hashedPassword });
      res.render("login", { message: "Tài khoản đã được tạo thành công" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Lỗi khi tạo tài khoản mới" });
    }
  }

  static async resultLogout(req, res) {
    res.clearCookie("token");
    res.redirect("/");
  }
}
module.exports = AuthController;
