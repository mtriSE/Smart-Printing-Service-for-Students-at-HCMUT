const express = require("express");
const printingController = require("../controllers/printingController");
const configurationController = require("../controllers/configurationController");

const router = express.Router();

// user/history
// tho lam
router.get("/history", (req, res) => {});
//tien lam
router.get("/printing", printingController.get_enabled_printer_list);
router.post("/printing/upload", configurationController.check_valid_file);
router.post(
  "/printing/configuration",
  configurationController.configure_printing
);

// tien lam
router.get("/buy", (req, res) => {});

module.exports = router;
