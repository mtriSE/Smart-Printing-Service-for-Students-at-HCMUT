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
  // ptho1504
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
  getAll(result) {
    const sql = "SELECT * from history";
    con.query(sql, (err, res) => {
      if (err) {
        result(null);
      } else {
        result(res);
      }
    });
  }
  getByStudentId(studentid, result) {
    const sql = "SELECT * from history where `student_id` = ? ";
    con.query(sql, [studentid], (err, res) => {
      if (err) {
        result(null);
      } else {
        result(res);
      }
    });
  }
  getByPrinterId(printerid, result) {
    const sql = "SELECT * from history where `printer_id` = ?";
    con.query(sql, [printerid], (err, res) => {
      if (err) {
        result(null);
      } else {
        result(res);
      }
    });
  }
  getStuPri_printing_history(studentid, printerid, result) {
    const sql =
      "SELECT * from history where `student_id` = ? AND `printer_id` = ?";
    con.query(sql, [studentid, printerid], (err, res) => {
      if (err) {
        result(null);
      } else {
        // console.log(res);

        result(res);
      }
    });
  }

  getHistoryByTime(data, result) {
    const from = data.from_day;
    const to = data.to_day;

    const sql = "SELECT * from history where `printing_date` BETWEEN ? AND  ?";
    con.query(sql, [from, to], (err, res) => {
      if (err) {
        result(null);
      } else {
        // console.log(res);
        result(res);
      }
    });
  }

  getHistoryByTimefromStudent(studentid, data, result) {
    const from = data.from_day;
    const to = data.to_day;

    const sql =
      "SELECT * from history where `student_id` = ? AND `printing_date` BETWEEN ? AND  ?";
    con.query(sql, [studentid, from, to], (err, res) => {
      if (err) {
        result(null);
      } else {
        // console.log(studentid,from,to);
        result(res);
      }
    });
  }
  getHistoryByTimefromPrinter(printerid, data, result) {
    const from = data.from_day;
    const to = data.to_day;
    const sql =
      "SELECT * from history where printer_id = ? AND `printing_date` BETWEEN ? AND  ?";
    con.query(sql, [printerid, from, to], (err, res) => {
      if (err) {
        result(null);
      } else {
        // console.log(res);
        result(res);
      }
    });
  }
  getYourPrinter(studentid, printerid, result) {
    const sql =
      "SELECT * from history where `printer_id` = ? AND `student_id` = ?";
    con.query(sql, [printerid, studentid], (err, res) => {
      if (err) {
        result(null);
        
      } else {
        
        result(res);
        // return result(res);
      }
    });
  }
}

module.exports = new HistoryModel();
