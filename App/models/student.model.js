const con = require("./index");

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

  update_current_page_num(student_id, page_num, result) {
    con.query(
      "UPDATE student SET current_page=current_page+? WHERE student_id=?; SELECT current_page FROM student WHERE student_id=?;",
      [page_num, student_id, student_id],
      function (err, results) {
        if (err) {
          result(null);
        } else {
          result(results[1][0]);
        }
      }
    );
  }
}

module.exports = new StudentModel();
