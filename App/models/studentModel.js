const con = require("../lib/db");

class StudentModel {
  read_current_page_num(student_id, result) {
    con.query(
      "SELECT current_page FROM student WHERE student_id=?",
      student_id,
      function (err, current_page) {
        if (err) {
          result(null);
        } else {
          result(current_page);
        }
      }
    );
  }

  update_current_page_num(student_id, new_current_page, result) {
    con.query(
      "UPDATE current_page SET current_page=? WHERE student_id=?",
      new_current_page,
      student_id,
      function (err, current_page) {
        if (err) {
          result(null);
        } else {
          result(current_page);
        }
      }
    );
  }
}

module.exports = new StudentModel();
