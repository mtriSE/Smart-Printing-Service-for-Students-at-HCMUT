const con = require("../lib/db");

class PrinterModel {
  read_enabled_printer_list(result) {
    con.query("SELECT * FROM printer WHERE status=1", function (err, printer) {
      if (err) {
        result(null);
      } else {
        result(printer);
      }
    });
  }

  read_printer_list_by_id(id, result) {
    con.query("SELECT * FROM products WHERE id=?", id, function (err, printer) {
      if (err) {
        result(null);
      } else {
        result(printer);
      }
    });
  }
}

module.exports = new PrinterModel();
