const history = require("../models/history.model");

class HistoryController {
  get_printing_history(req, res) {
    if (req.params.student_id) {
      var student_id = req.params.student_id;
    } else {
      var student_id = "2114988";
    }

    var printer_id = req.params.printer_id;
    var start_date = req.params.start_date;
    var end_date = req.params.end_date;
    history.read_printing_history(
      student_id,
      printer_id,
      start_date,
      end_date,
      function (printing_history) {
        if (printing_history) {
          res.json(printing_history);
        } else {
          res.status(500).json({ error: "cannot get printing history" });
        }
      }
    );
  }
}

module.exports = new HistoryController();
