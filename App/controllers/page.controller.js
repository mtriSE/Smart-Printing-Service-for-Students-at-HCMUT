const student = require("../models/student.model");

class PageController {
  buy_gift_page(req, res) {
    if (req.body.student_id) {
      var student_id = req.body.student_id;
    } else {
      var student_id = "2114988";
    }
    var page_num = req.body.page_num;
    student.update_current_page_num(
      student_id,
      page_num,
      function (current_page) {
        if (current_page) {
          res.json(current_page);
        } else {
          res.status(500).json({ error: "cannot buy more page" });
        }
      }
    );
  }
}

module.exports = new PageController();
