const printer = require("../models/printer.model");

class PrintingController {
  get_enabled_printer_list(req, res) {
    printer.read_enabled_printer_list(function (printer_list) {
      if (printer_list) {
        res.json(printer_list);
      } else {
        res.status(500).json({ error: "cannot get printer list" });
      }
    });
  }
}

module.exports = new PrintingController();
