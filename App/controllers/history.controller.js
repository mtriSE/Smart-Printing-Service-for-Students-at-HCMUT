const history = require("../models/history.model");

class HistoryController {
  get_printing_history(req, res) {
    if (req.params.student_id) {
      var student_id = req.params.student_id;
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
  getAll_printing_history(req, res) {
    history.getAll(function (result) {
      if (result) {
        res.json(result);
      } else {
        res.status(500).json({ error: "can not get all printing history" });
      }
    });
  }
  getByStudentId_printing_history(req, res) {
    let studentid = null;
    if (req.params) {
      studentid = req.params.studentid;
      history.getByStudentId(studentid, (result) => {
        if (result) {
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Student" });
        }
      });
    } else {
      res.status(404).json({ error: "Error Invalid Student" });
    }
  }
  getPrinterId_printing_history(req, res) {
    let printerid = null;
    if (req.params) {
      printerid = req.params.printerid;
      console.log(printerid);
      history.getByPrinterId(printerid, (result) => {
        if (result) {
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Printer" });
        }
      });
    } else {
      res.status(404).json({ error: "Error Invalid Printer" });
    }
  }
  getStuPri_printing_history(req, res) {
    let printerid = null;
    let studentid = null;
    if (req.params) {
      studentid = req.params.studentid;
      printerid = req.params.printerid;
      history.getStuPri_printing_history(studentid, printerid, (result) => {
        if (result) {
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Printer" });
        }
      });
    } else {
      res.status(404).json({ error: "Error Invalid Printer" });
    }
  }
  getHistoryByTime(req, res) {
    const { from_day, to_day } = req.body;
    const data = { from_day, to_day };
    history.getHistoryByTime(data, (result) => {
      if (result) {
        res.json(result);
      } else {
        res.status(500).json({ error: "No found Printer" });
      }
    });
  }

  getMyHistoryByTime(req, res) {
    const { from_day, to_day } = req.body;
    const data = { from_day, to_day };
    const studentid = req.bknetid.split("A")[1];
    history.getHistoryByTimefromStudent(studentid, data, (result) => {
      if (result) {
        console.log(result);
        return;
        res.json(result);
      } else {
        res.status(500).json({ error: "No found Printer" });
      }
    });
  }
  getMyHistory(req, res) {
    const studentid = req.bknetid.split("A")[1];
    if (studentid) {
      history.getByStudentId(studentid, (result) => {
        if (result) {
          console.log(result);
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Student" });
        }
      });
    } else {
      res.status(404).json({ error: "Error Invalid Student" });
    }
  }

  getHistoryByTimeofStudent(req, res) {
    let studentid = req.params.studentId;
    const { from_day, to_day } = req.body;
    const data = { from_day, to_day };

    if (studentid) {
      history.getHistoryByTimefromStudent(studentid, data, (result) => {
        if (result) {
          console.log(result);
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Printer" });
        }
      });
    } else {
    }
  }
  getHistoryByTimeofPrinter(req, res) {
    let printerid = req.params.printerId;
    const { from_day, to_day } = req.body;
    const data = { from_day, to_day };
    console.log(data, printerid);
    if (printerid) {
      history.getHistoryByTimefromPrinter(printerid, data, (result) => {
        if (result) {
          console.log(result);
          res.json(result);
        } else {
          res.status(500).json({ error: "No found Printer" });
        }
      });
    } else {
    }
  }
  getPrinter(req, res) {
    const printerid = req.params.printerid;
    const studentid = req.bknetid.split("A")[1];
    history.getYourPrinter(studentid, printerid, (result) => {
      if (result) {
        console.log(result);
        res.send(result);
      } else {
        res.status(404).send({ error: "Error Not found printer" });
      }
    });
  }
}

module.exports = new HistoryController();
