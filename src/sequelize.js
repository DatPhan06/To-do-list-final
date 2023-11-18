const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config({ path: "./src/.env" });

// tạo 1 phiên bản sequelize kết nối mysql
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_USER_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  // kiểm tra kết nối
  sequelize.authenticate();
  console.log("Kết nối tới database thành công");
} catch (error) {
  console.log("Error, Lỗi kết nối tới database : ", error);
}

// Hàm tạo cơ sở dữ liệu
try {
  // Tạo cơ sở dữ liệu "todo_db" nếu nó chưa tồn tại
  sequelize.query("CREATE DATABASE IF NOT EXISTS todo_db;");

  // Sử dụng đồng bộ hóa để tạo các bảng trong cơ sở dữ liệu
  sequelize.sync();
} catch (error) {
  throw error;
}

module.exports = {
  sequelize,
  DataTypes,
};
