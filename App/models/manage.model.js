const db = require("./index");

class ManageModel {
  // Getting all printer
  read_all_printer_list(result) {
    db.query("SELECT * FROM printer", function (err, printer_mag_list) {
      if (err) {
        result(null);
      } else {
        result(printer_mag_list);
      }
    });
  }

  // Adding printer (fixed)
  add_printer(
    printer_id,
    printer_name,
    printer_status,
    printer_campus,
    printer_building,
    printer_floor,
    description,
    result
  ) {
    db.query(
      "INSERT INTO printer(printer_id, name, status, campus, building, floor,description) VALUES (?,?,?,?,?,?,?)",
      [
        printer_id,
        printer_name,
        printer_status,
        printer_campus,
        printer_building,
        printer_floor,
        description,
      ],
      (err, res) => {
        if (err) {
          console.log("Error when adding printer: ", err);
          result(null);
          return;
        }
        console.log("Added printer :" + printer_id);
        result(res);
      }
    );
  }

  // Deleting printer
  delete_printer(printer_id, result) {
    db.query(
      `DELETE FROM printer WHERE printer_id = '${printer_id}'`,
      (err, res) => {
        if (err) {
          console.log("Error when deleting printer: ", err);
          result(null);
          return;
        }
        console.log("Deleted printer with ID:" + printer_id);
        result(res);
      }
    );
  }

  // Enable printer
  enable_printer(printer_id, result) {
    db.query(
      "UPDATE printer SET status = 1 WHERE printer_id = ?",
      printer_id,
      (err, res) => {
        if (err) {
          console.log("Error when enabling printer: ", err);
          result(null);
          return;
        }
        console.log("Enabled printer with ID:" + printer_id);
        result(res);
      }
    );
  }

  // Disable printer
  disable_printer(printer_id, result) {
    db.query(
      `UPDATE printer SET status = 0 WHERE printer_id = '${printer_id}'`,
      (err, res) => {
        if (err) {
          console.log("Error when disabling printer: ", err);
          result(null);
          return;
        }
        console.log("Disabled printer with ID:" + printer_id);
        result(res);
      }
    );
  }

  // Update printer
  update_printer(
    printer_id,
    printer_name,
    printer_campus,
    printer_building,
    printer_floor,
    description,
    result
  ) {
    db.query(
      "UPDATE printer SET name = ?, campus = ?, building = ?, floor = ?, description=? WHERE printer_id = ?",
      [
        printer_name,
        printer_campus,
        printer_building,
        printer_floor,
        description,
        printer_id,
      ],
      (err, res) => {
        if (err) {
          console.log("Error when updating printer: ", err);
          result(null);
          return;
        }
        console.log("Updated printer :" + printer_id);
        result(res);
      }
    );
  }
}
module.exports = new ManageModel();