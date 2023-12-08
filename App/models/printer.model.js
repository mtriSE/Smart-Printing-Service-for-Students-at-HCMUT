const con = require("./index");

class PrinterModel {
  read_enabled_printer_list(result) {
    con.query(
      "SELECT * FROM printer WHERE status=1",
      function (err, printer_list) {
        if (err) {
          result(null);
        } else {
          result(printer_list);
        }
      }
    );
  }
}

module.exports = new PrinterModel();
