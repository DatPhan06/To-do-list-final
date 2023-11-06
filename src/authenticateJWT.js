const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

function authenticateJWT(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.json("Từ chối truy cập vì không có Token"); // Không có token, từ chối truy cập
  }

  jwt.verify(token, "your-secret-key", (err, user) => {
    if (err) {
      return res.json("Từ chối truy cập vì Token không hợp lệ"); // Token không hợp lệ, từ chối truy cập
    }

    req.user = user; // Lưu thông tin người dùng từ JWT vào biến req.user
    next(); // Cho phép tiếp tục xử lý yêu cầu
  });
}

module.exports = authenticateJWT;
