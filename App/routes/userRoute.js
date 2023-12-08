const express = require("express");
const multer = require("multer");
const printingController = require("../controllers/printing.controller");
const configurationController = require("../controllers/configuration.controller");
const pageController = require("../controllers/page.controller");
const historyController = require("../controllers/history.controller");

const router = express.Router();

const storage = multer.memoryStorage(); // Store files in memory (you can change this based on your needs)
const upload = multer({ storage: storage });

//print a document
router.get("/printing", printingController.get_enabled_printer_list);
router.post(
  "/printing/upload",
  upload.single("file"),
  configurationController.check_valid_file
);
router.post(
  "/printing/configuration",
  configurationController.configure_printing
);

// view printing history -> almost complete
router.get(
  "/history/:start_date/:end_date",
  historyController.get_printing_history
);
router.get("/history", historyController.get_printing_history);

//buy more page -> almost complete
router.get("/page", pageController.get_page_num);
router.post("/page/buy", pageController.buy_gift_page);
router.post("/page/gift", pageController.buy_gift_page);

module.exports = router;
