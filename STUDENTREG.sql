-- Tạo database và bảng cho ứng dụng Student Registration

CREATE DATABASE IF NOT EXISTS studentreg;
USE studentreg;

CREATE TABLE IF NOT EXISTS Student (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  major VARCHAR(255) NOT NULL
);

-- Dữ liệu mẫu
INSERT INTO Student (full_name, email, major) VALUES
('Nguyen Van A', 'a@example.com', 'Công nghệ thông tin'),
('Tran Thi B', 'b@example.com', 'Kế toán');
