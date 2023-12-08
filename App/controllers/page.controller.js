const student = require("../models/student.model");

class PageController {
  buy_gift_page(req, res) {
    if (req.body.student_id) {
      var student_id = req.body.student_id;
    } else {
      //process token
      var student_id = req.bknetid.split("A")[1];
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

  get_page_num(req, res) {
    //process token
    const student_id = req.bknetid.split("A")[1];

    student.read_current_page_num(student_id, function (page_num) {
      if (page_num) {
        res.json(page_num);
      } else {
        res.status(500).json({ error: "cannot read page num" });
      }
    });
  }
}

module.exports = new PageController();
