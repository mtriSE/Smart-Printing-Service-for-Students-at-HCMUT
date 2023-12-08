const express = require("express");
const configurationController = require("../controllers/configuration.controller");
const historyController = require("../controllers/history.controller");
const manageController = require("../controllers/manage.controller")
const router = express.Router();

// api -> controller

//nhien lam
// Show chuc nang ra
router.post("/manage", (req, res) => {manageController.manage_get_printers(req,res)});
router.post("/manage/add", (req, res) => {manageController.manage_add_printer(req,res)});
router.post("/manage/update", (req, res) => {manageController.manage_update_printer(req,res)});
router.post("/manage/delete", (req, res) => {manageController.manage_delete_printer(req,res)});
router.post("/manage/enable", (req, res) => {manageController.manage_enable_printer(req,res)});
router.post("/manage/disable", (req, res) => {manageController.manage_disable_printer(req,res)});

// configure system ->
router.post("/configuration", configurationController.config);

// view printing history -> almost complete
router.get(
  "/history/:student_id/:printer_id/:start_date/:end_date",
  historyController.get_printing_history
);
router.get(
  "/history/:student_id/:start_date/:end_date",
  historyController.get_printing_history
);
router.get(
  "/history:printer_id/:start_date/:end_date",
  historyController.get_printing_history
);
router.get(
  "/history/:student_id/:printer_id",
  historyController.get_printing_history
);
router.get("/history/:student_id", historyController.get_printing_history);
router.get("/history/:printer_id", historyController.get_printing_history);
router.get("/history", historyController.get_printing_history);

module.exports = router;
