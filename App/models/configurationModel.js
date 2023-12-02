const con = require("../lib/db");

class PrinterModel {
  read_valid_file(file_name, result) {
    con.query(
      "SELECT valid_file_name FROM configuration WHERE valid_file_name=?",
      file_name,
      function (err, valid_file) {
        if (err) {
          result(null);
        } else {
          result(valid_file);
        }
      }
    );
  }
}

module.exports = new PrinterModel();
