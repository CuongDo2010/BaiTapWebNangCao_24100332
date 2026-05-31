const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Để đọc được dữ liệu dạng JSON gửi lên từ Postman

// Routes chính
app.use("/students", studentRoutes);

// Khởi chạy Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy mượt mà tại cổng ${PORT} 🚀`);
});