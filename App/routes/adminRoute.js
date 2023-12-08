const express = require("express");
const configurationController = require("../controllers/configuration.controller");
const historyController = require("../controllers/history.controller");
const manageController = require("../controllers/manage.controller");

const router = express.Router();

// api -> controller

//nhien lam
// Show chuc nang ra
router.post("/manage", (req, res) => {
  manageController.manage_get_printers(req, res);
});
router.post("/manage/add", (req, res) => {
  manageController.manage_add_printer(req, res);
});
router.post("/manage/update", (req, res) => {
  manageController.manage_update_printer(req, res);
});
router.post("/manage/delete", (req, res) => {
  manageController.manage_delete_printer(req, res);
});
router.post("/manage/enable", (req, res) => {
  manageController.manage_enable_printer(req, res);
});
router.post("/manage/disable", (req, res) => {
  manageController.manage_disable_printer(req, res);
});
// ----------------------------------------------------
// configure system ->
router.get("/configuration", configurationController.get_configuration);
router.post("/configuration", configurationController.set_configuration);
// ----------------------------------------------------
// view printing history
// getAll history
router.get("/history/all", historyController.getAll_printing_history);
// get history from studentId
router.get(
  "/history/student/:studentid",
  historyController.getByStudentId_printing_history
);
// get history from printerId
router.get(
  "/history/printer/:printerid",
  historyController.getPrinterId_printing_history
);
// get history from studentId and HistoryId
router.get(
  "/history/:studentid/:printerid",
  historyController.getStuPri_printing_history
);
// get history between from_day to to_day
router.post("/history/time", historyController.getHistoryByTime);
// get history between from_day to to_day of Student
router.post(
  "/history/time/student/:studentId",
  historyController.getHistoryByTimeofStudent
);
// get history between from_day to to_day of Printer
router.post(
  "/history/time/printer/:printerId",
  historyController.getHistoryByTimeofPrinter
);

// router.get(
//   "/history/:student_id",
//   historyController.get_printing_history
// );
/*

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
*/

module.exports = router;
