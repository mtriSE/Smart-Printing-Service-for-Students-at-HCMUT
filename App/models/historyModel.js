const con = require("../lib/db");

class HistoryModel {
  create_printing_history(
    student_id,
    printer_id,
    file_name,
    start_time,
    end_time,
    page_num,
    page_size,
    result
  ) {
    con.query(
      "INSERT INTO `history`(`id`, `student_id`, `printer_id`, `file_name`, `start_time`, `end_time`, `numOfPage`, `page_size`) VALUES ('',?,?,?,?,?,?,?)",
      student_id,
      printer_id,
      file_name,
      start_time,
      end_time,
      page_num,
      page_size,
      function (err, printer) {
        if (err) {
          result(null);
        } else {
          result(printer);
        }
      }
    );
  }
}

module.exports = new HistoryModel();
