const con = require("./index");

class HistoryModel {
  read_printing_history(student_id, printer_id, start_date, end_date, result) {
    if (student_id && printer_id) {
      if (start_date && end_date) {
        con.query(
          "SELECT * FROM history WHERE student_id=? and printer_id=? and (printing_date between ? and ?)",
          [student_id, printer_id, start_date, end_date],
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      } else {
        con.query(
          "SELECT * FROM history WHERE student_id=? and printer_id=?",
          [student_id, printer_id],
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      }
    } else if (student_id) {
      if (start_date && end_date) {
        con.query(
          "SELECT * FROM history WHERE student_id=? and (printing_date between ? and ?)",
          [student_id, start_date, end_date],
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      } else {
        con.query(
          "SELECT * FROM history WHERE student_id=?",
          student_id,
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      }
    } else {
      if (start_date && end_date) {
        con.query(
          "SELECT * FROM history WHERE printer_id=? and (printing_date between ? and ?)",
          [printer_id, start_date, end_date],
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      } else {
        con.query(
          "SELECT * FROM history WHERE printer_id=?",
          printer_id,
          function (err, printing_history) {
            if (err) {
              result(null);
            } else {
              result(printing_history);
            }
          }
        );
      }
    }
  }

  create_printing_history(
    student_id,
    printer_id,
    file_name,
    start_time,
    end_time,
    page_num,
    page_size,
    printing_date,
    result
  ) {
    con.query(
      "INSERT INTO `history`(`id`, `student_id`, `printer_id`, `file_name`, `start_time`, `end_time`, `numOfPage`, `page_size`, `printing_date`) VALUES ('',?,?,?,?,?,?,?,?)",
      [
        student_id,
        printer_id,
        file_name,
        start_time,
        end_time,
        page_num,
        page_size,
        printing_date,
      ],
      function (err, printing_history) {
        if (err) {
          result(null);
        } else {
          result(printing_history);
        }
      }
    );
  }
}

module.exports = new HistoryModel();
