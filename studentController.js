const db = require("../db");

// 1. CREATE - Thêm sinh viên mới
exports.createStudent = (req, res) => {
  const { full_name, email, major } = req.body;
  const sql = "INSERT INTO Student(full_name, email, major) VALUES (?, ?, ?)";
  
  db.query(sql, [full_name, email, major], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Thêm sinh viên thành công!", id: result.insertId });
  });
};

// 2. READ ALL - Lấy danh sách tất cả sinh viên
exports.getStudents = (req, res) => {
  const sql = "SELECT * FROM Student";
  
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

// 3. READ ONE - Lấy thông tin 1 sinh viên theo ID
exports.getStudentById = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM Student WHERE student_id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Không tìm thấy sinh viên" });
    res.json(result[0]);
  });
};

// 4. UPDATE - Sửa thông tin sinh viên
exports.updateStudent = (req, res) => {
  const id = req.params.id;
  const { full_name, email, major } = req.body;
  const sql = "UPDATE Student SET full_name = ?, email = ?, major = ? WHERE student_id = ?";
  
  db.query(sql, [full_name, email, major, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Cập nhật thông tin thành công!" });
  });
};

// 5. DELETE - Xóa sinh viên
exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM Student WHERE student_id = ?";
  
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Xóa sinh viên thành công!" });
  });
};