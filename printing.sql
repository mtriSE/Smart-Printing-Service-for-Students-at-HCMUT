-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th12 08, 2023 lúc 03:37 PM
-- Phiên bản máy phục vụ: 8.0.34
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET GLOBAL time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `printing`
--

CREATE DATABASE printing;
USE printing;


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `account_id` varchar(127) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `role` varchar(1) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`account_id`, `password`, `role`) VALUES
('A1000001', '123456789', 'A'),
('A1000002', '123456789', 'A'),
('A2111111', '123456789', 'U'),
('A2111949', '123456789', 'U'),
('A2112001', '123456789', 'U'),
('A2112542', '123456789', 'U'),
('A2113001', '123456789', 'U'),
('A2113055', '123456789', 'U'),
('A2114913', '123456789', 'U'),
('A2114988', '123456789', 'U'),
('A2115099', '123456789', 'U');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `configuration`
--

CREATE TABLE `configuration` (
  `default_page_num` int NOT NULL,
  `default_date` int NOT NULL,
  `id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `configuration`
--

INSERT INTO `configuration` (`default_page_num`, `default_date`, `id`) VALUES
(222, 12, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `file_type`
--

CREATE TABLE `file_type` (
  `file_type` varchar(10) COLLATE utf8mb3_unicode_ci NOT NULL,
  `is_check` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `file_type`
--

INSERT INTO `file_type` (`file_type`, `is_check`) VALUES
('.doc', 0),
('.docx', 1),
('.pdf', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `history`
--

CREATE TABLE `history` (
  `id` int NOT NULL,
  `student_id` varchar(7) COLLATE utf8mb3_unicode_ci NOT NULL,
  `printer_id` varchar(7) COLLATE utf8mb3_unicode_ci NOT NULL,
  `file_name` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `numOfPage` int NOT NULL,
  `page_size` varchar(2) COLLATE utf8mb3_unicode_ci NOT NULL,
  `printing_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `history`
--

INSERT INTO `history` (`id`, `student_id`, `printer_id`, `file_name`, `start_time`, `end_time`, `numOfPage`, `page_size`, `printing_date`) VALUES
(12, '2114988', 'P100001', 'tien.txt', '09:31:17', '09:31:23', 6, 'A3', '2023-12-03'),
(13, '2114988', 'P100001', 'tien.txt', '11:32:47', '11:32:53', 6, 'A3', '2023-12-03'),
(14, '2114913', 'P200003', 'a1.txt', '00:00:00', '00:00:00', 12, 'A4', '2023-09-12'),
(15, '2114913', 'P200003', 'a2.txt', '00:00:00', '00:00:00', 11, 'A4', '2023-02-12'),
(16, '2114913', 'P200003', 'a3.txt', '00:00:00', '00:00:00', 5, 'A4', '2023-02-01'),
(17, '2114913', 'P200002', 'b1.txt', '00:00:00', '00:00:00', 52, 'A6', '2023-02-01'),
(18, '2114913', 'P200002', 'b2.txt', '00:00:00', '00:00:00', 52, 'A4', '2023-02-05'),
(19, '2114913', 'P200002', 'b3.txt', '00:00:00', '00:00:00', 12, 'A4', '2023-12-05'),
(20, '2114913', 'P600004', 'c3.txt', '00:00:00', '00:00:00', 1, 'A4', '2023-12-12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `printer`
--

CREATE TABLE `printer` (
  `printer_id` varchar(7) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `campus` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `building` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `floor` int NOT NULL,
  `description` mediumtext COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `printer`
--

INSERT INTO `printer` (`printer_id`, `name`, `status`, `campus`, `building`, `floor`, `description`) VALUES
('P100001', 'Máy Photocopy Ricoh Aficio MP 9003', 1, 'CS2', 'H1', 1, 'Máy photocopy đa năng trắng/đen. 90 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P100002', 'Máy Photocopy màu toshiba 5516AC', 1, 'CS2', 'H1', 1, 'Máy photocopy đa năng màu. 55 trang/phút. Chức năng: Copy, in, scan. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P100003', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H1', 3, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P100004', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H1', 6, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P100011', 'Máy Photocopy Ricoh Aficio MP 9003', 1, 'CS2', 'H1', 1, 'Máy photocopy đa năng trắng/đen. 90 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P100012', 'Máy Photocopy màu toshiba 5516AC', 1, 'CS2', 'H1', 1, 'Máy photocopy đa năng màu. 55 trang/phút.. Chức năng: Copy, in, scan. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P200001', 'Máy Photocopy Ricoh Aficio MP 9003', 1, 'CS2', 'H2', 1, 'Máy photocopy đa năng trắng/đen. 90 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P200002', 'Máy Photocopy màu toshiba 5516AC', 1, 'CS2', 'H2', 1, 'Máy photocopy đa năng màu. 55 trang/phút. Chức năng: Copy, in, scan. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P200003', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H2', 3, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P200004', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H2', 6, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P600001', 'Máy Photocopy Ricoh Aficio MP 9003', 1, 'CS2', 'H6', 1, 'Máy photocopy đa năng trắng/đen. 90 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P600002', 'Máy Photocopy màu toshiba 5516AC', 1, 'CS2', 'H6', 1, 'Máy photocopy đa năng màu. 55 trang/phút. Chức năng: Copy, in, scan. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P600003', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H6', 3, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6'),
('P600004', 'Máy Photocopy RICOH IM 4000', 1, 'CS2', 'H6', 6, 'Máy photocopy đa năng trắng/đen. 30 trang/phút. Chức năng: Copy, in, scan, fax tùy chọn. Cỡ giấy A3, A4, A5, A6, B4, B5, B6');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student`
--

CREATE TABLE `student` (
  `student_id` varchar(7) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL,
  `current_page` int NOT NULL,
  `account_id` varchar(127) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `student`
--

INSERT INTO `student` (`student_id`, `name`, `current_page`, `account_id`) VALUES
('2111949', 'Nguyễn Hoàng Hữu Nhiên', 100, 'A2111949'),
('2112542', 'Trần Đắc Thanh Trung', 100, 'A2112542'),
('2113055', 'Bùi Tiến Dũng', 100, 'A2113055'),
('2114913', 'Trương Nguyễn Phước Thọ', 100, 'A2114913'),
('2114988', 'Nguyễn Đại Tiến', 70, 'A2114988'),
('2115099', 'Mai Quốc Trị', 100, 'A2115099');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`);

--
-- Chỉ mục cho bảng `configuration`
--
ALTER TABLE `configuration`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `file_type`
--
ALTER TABLE `file_type`
  ADD PRIMARY KEY (`file_type`);

--
-- Chỉ mục cho bảng `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_student_id_from_student` (`student_id`),
  ADD KEY `FK_printer_id_from_printer` (`printer_id`);

--
-- Chỉ mục cho bảng `printer`
--
ALTER TABLE `printer`
  ADD PRIMARY KEY (`printer_id`);

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `FK_account_id_from_account` (`account_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `configuration`
--
ALTER TABLE `configuration`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `history`
--
ALTER TABLE `history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `FK_printer_id_from_printer` FOREIGN KEY (`printer_id`) REFERENCES `printer` (`printer_id`),
  ADD CONSTRAINT `FK_student_id_from_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`);

--
-- Các ràng buộc cho bảng `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `FK_account_id_from_account` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
