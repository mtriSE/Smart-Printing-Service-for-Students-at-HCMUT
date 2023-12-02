const printer = require("../models/printerModel");

class PrintingController {
  get_enabled_printer_list(req, res) {
    printer.read_enabled_printer_list(function (data) {
      if (data) {
        res.json(data);
      } else {
        res.status(500).json({ error: "cannot get printer list" });
      }
    });
  }
}

module.exports = new PrintingController();
