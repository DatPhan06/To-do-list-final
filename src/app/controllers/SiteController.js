const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Task = require("../models/Task")(sequelize, DataTypes);

class SiteController {
  // [GET] /home
  static async home(req, res) {
    async function getAllTasks() {
      try {
        const tasks = await Task.findAll();
        return tasks;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        // res.status(500).json({ error: "Lỗi khi lấy danh sách công việc" });
      }
    }
    var data = await getAllTasks();
    data = data.map((item) => item.toJSON());
    res.render("home", { data });
  }

  static async welcome(req, res) {
    res.render("welcome");
  }
}

module.exports = SiteController;
