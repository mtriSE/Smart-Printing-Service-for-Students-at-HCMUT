const express = require("express");
const printingController = require("../controllers/printing.controller");
const configurationController = require("../controllers/configuration.controller");
const pageController = require("../controllers/page.controller");
const historyController = require("../controllers/histor.controller");

const router = express.Router();

//print a document
router.get("/printing", printingController.get_enabled_printer_list);
router.post("/printing/upload", configurationController.check_valid_file);
router.post(
  "/printing/configuration",
  configurationController.configure_printing
);

// view printing history
router.get(
  "/history/:start_date/:end_date",
  historyController.get_printing_history
);
router.get("/history", historyController.get_printing_history);

//buy more page
router.post("/page/buy", pageController.buy_gift_page);
router.post("/page/gift", pageController.buy_gift_page);

module.exports = router;
