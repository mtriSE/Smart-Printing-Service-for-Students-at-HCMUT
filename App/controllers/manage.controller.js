const manage = require("../models/manage.model");

class ManageController {
  manage_get_printers(req, res) {
    manage.read_all_printer_list(function (printer_mag_list) {
      if (printer_mag_list) {
        res.json(printer_mag_list);
      } else {
        res.status(500).json({ error: "cannot get printer list" });
      }
    });
  }

  manage_enable_printer(req, res) {
    var printer_id = req.body.printer_id;
    manage.enable_printer(printer_id, function (actionResult) {
      if (actionResult) {
        res.json(actionResult);
      } else {
        res.status(500).json({ error: "cannot enable printer" });
      }
    });
  }

  manage_disable_printer(req, res) {
    var printer_id = req.body.printer_id;
    manage.disable_printer(printer_id, function (actionResult) {
      if (actionResult) {
        res.json(actionResult);
      } else {
        res.status(500).json({ error: "cannot disable printer" });
      }
    });
  }

  manage_delete_printer(req, res) {
    var printer_id = req.body.printer_id;
    manage.delete_printer(printer_id, function (actionResult) {
      if (actionResult) {
        res.json(actionResult);
      } else {
        res.status(500).json({ error: "cannot delete printer" });
      }
    });
  }

  manage_add_printer(req, res) {
    var printer_id = req.body.printer_id;
    var printer_name = req.body.printer_name;
    var printer_status = 1;
    var printer_campus = req.body.campus;
    var printer_building = req.body.building;
    var printer_floor = req.body.floor;
    var description = req.body.description;
    manage.add_printer(
      printer_id,
      printer_name,
      printer_status,
      printer_campus,
      printer_building,
      printer_floor,
      description,
      function (actionResult) {
        if (actionResult) {
          res.json(actionResult);
        } else {
          res.status(500).json({ error: "cannot add printer" });
        }
      }
    );
  }

  manage_update_printer(req, res) {
    var printer_id = req.body.printer_id; // Cannot be changed
    var printer_name = req.body.printer_name;
    var printer_campus = req.body.campus;
    var printer_building = req.body.building;
    var printer_floor = req.body.floor;
    var description = req.body.description;
    manage.update_printer(
      printer_id,
      printer_name,
      printer_campus,
      printer_building,
      printer_floor,
      description,
      function (actionResult) {
        if (actionResult) {
          res.json(actionResult);
        } else {
          res.status(500).json({ error: "cannot update printer" });
        }
      }
    );
  }
}

module.exports = new ManageController();
