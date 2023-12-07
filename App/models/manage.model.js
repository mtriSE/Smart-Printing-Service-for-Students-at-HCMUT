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
            result(err, null);
            return;
        }
        console.log("Added printer :", { id: res.printer_id, ...newPrinter });
        result(null, newAccount);
    });
  }

// Deleting printer
  delete_printer(printerID,result) {
    db.query(`DELETE FROM printer WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when deleting printer: ", err);
            result(err, null);
            return;
        }
        console.log("Deleted printer with ID:"+printerID.toString());
        result(null, newAccount);
    });
  }

// Enable printer
  enable_printer(printerID,result) {
    db.query(`UPDATE printer SET status = 1 WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when enabling printer: ", err);
            result(err, null);
            return;
        }
        console.log("Enabled printer with ID:"+printerID.toString());
        result(null, newAccount);
    });
  }

// Disable printer
  disable_printer(printerID,result) {
    db.query(`UPDATE printer SET status = 0 WHERE printer_id = '${printerID}'`, (err, res) => {
        if (err) {
            console.log("Error when disabling printer: ", err);
            result(err, null);
            return;
        }
        console.log("Disabled printer with ID:"+printerID.toString());
        result(null, newAccount);
    });
  }

// Update printer
  


}

// Maybe not needed
ManageModel.add = (newPrinter, result) => {
    db.query("INSERT INTO printer SET ?", newPrinter, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Added printer :", { id: res.insertId, ...newAccount });
        result(null, newAccount);
    });
};

module.exports = new ManageModel();