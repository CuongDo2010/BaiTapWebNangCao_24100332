const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// Định nghĩa các đường dẫn API
router.post("/", studentController.createStudent);      // Thêm mới
router.get("/", studentController.getStudents);        // Lấy tất cả
router.get("/:id", studentController.getStudentById);  // Lấy theo ID
router.put("/:id", studentController.updateStudent);    // Cập nhật theo ID
router.delete("/:id", studentController.deleteStudent); // Xóa theo ID

module.exports = router;