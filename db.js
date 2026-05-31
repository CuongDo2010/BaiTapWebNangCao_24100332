const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306 // Tự động dùng 3306 hoặc port trong file .env
});

db.connect((err) => {
  if (err) {
    console.error("Kết nối DB thất bại:", err.message);
  } else {
    console.log("Kết nối MySQL thành công rồi nhé! 🎉");
  }
});

module.exports = db;