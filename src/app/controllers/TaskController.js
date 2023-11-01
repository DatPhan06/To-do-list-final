const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Task = require("../models/Task")(sequelize, DataTypes);

class TaskController {
  // [POST] /add
  static async add(req, res) {
    try {
      const { title, description, completed } = req.body;
      await Task.create({ title, description, completed });
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.json({ error: "Lỗi khi tạo công việc mới" });
    }
  }

  // Route để xóa một công việc theo ID (Delete)
  static async delete(req, res) {
    // res.json(req.params.id);
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.json({ error: "Không tìm thấy công việc" });
      }
      await task.destroy();
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.json({ error: "Lỗi khi xóa công việc" });
    }
  }

  // Route để cập nhật thông tin một công việc theo ID (Update)
  static async update(req, res) {
    try {
      const task = await Task.findByPk(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Không tìm thấy công việc" });
      }
      await task.update({ Completed: !task.Completed });
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.json({ error: "Lỗi khi cập nhật công việc" });
    }
  }

  // // Route để lấy thông tin một công việc theo ID (Read one)
  // async read(req, res) {
  //   try {
  //     const task = await Task.findByPk(req.params.id);
  //     if (!task) {
  //       return res.json({ error: "Không tìm thấy công việc" });
  //     }
  //     res.json(task);
  //   } catch (err) {
  //     console.error(err);
  //     res.json({ error: "Lỗi khi lấy thông tin công việc" });
  //   }
  // }
}

module.exports = TaskController;
