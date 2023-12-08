const express = require("express");
const configurationController = require("../controllers/configuration.controller");
const historyController = require("../controllers/history.controller");

const router = express.Router();

// api -> controller

//nhien lam
// Show chuc nang ra
router.post("/manage", (req, res) => {});
router.post("/manage/add", (req, res) => {});
router.post("/manage/update", (req, res) => {});
router.post("/manage/delete", (req, res) => {});
// Co the gop chung
router.post("/manage/enable", (req, res) => {});
router.post("/manage/disable", (req, res) => {});

// configure system ->
router.get("/configuration", configurationController.config);

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
