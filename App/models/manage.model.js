const db = require("./index");

class ManageModel {
// Getting all printer
  read_all_printer_list(result) {
    db.query(
      "SELECT * FROM printer",
      function (err, printer_mag_list) {
        if (err) {
          result(null);
        } else {
          result(printer_mag_list);
        }
      }
    );
  }

// Adding printer
  add_printer(newPrinter,result) {
    db.query("INSERT INTO printer SET ?", newPrinter, (err, res) => {
        if (err) {
            console.log("Error when adding printer: ", err);
            result(null);
            return;
        }
        console.log("Added printer :", { id: res.printer_id, ...newPrinter });
        result(res);
    });
  }

// Deleting printer
  delete_printer(printerID,result) {
    db.query(`DELETE FROM printer WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when deleting printer: ", err);
            result(null);
            return;
        }
        console.log("Deleted printer with ID:"+printerID.toString());
        result(res);
    });
  }

// Enable printer
  enable_printer(printerID,result) {
    db.query(`UPDATE printer SET status = 1 WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when enabling printer: ", err);
            result(null);
            return;
        }
        console.log("Enabled printer with ID:"+printerID.toString());
        result(res);
    });
  }

// Disable printer
  disable_printer(printerID,result) {
    db.query(`UPDATE printer SET status = 0 WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when disabling printer: ", err);
            result(null);
            return;
        }
        console.log("Disabled printer with ID:"+printerID.toString());
        result(res);
    });
  }

// Update printer
  update_printer(newPrinter,result) {
    db.query("UPDATE printer SET ? WHERE ?", [newPrinter, newPrinter.printer_id], (err, res) => {
        if (err) {
            console.log("Error when updating printer: ", err);
            result(null);
            return;
        }
        console.log("Updated printer :", { id: res.printer_id, ...newPrinter });
        result(res);
    });
  }
}
module.exports = new ManageModel();