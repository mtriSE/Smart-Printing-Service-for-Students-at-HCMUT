const express = require("express");
const multer = require("multer");
const printingController = require("../controllers/printing.controller");
const configurationController = require("../controllers/configuration.controller");
const pageController = require("../controllers/page.controller");
const historyController = require("../controllers/history.controller");

const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });



//print a document
router.get("/printing", printingController.get_enabled_printer_list);

router.post("/printing/upload", upload.single("file"), (req, res) => {
  
  res.send(req.file);
});

router.post(
  "/printing/configuration",
  configurationController.configure_printing
);
//---------------------------------------
// view printing history 

// view my history 
router.get(
  "/history/student/",
  historyController.getMyHistory,
);
// view my hisotory from printer
router.post(
  "/history/printer/:printerid",
  historyController.getPrinter,
);
// view my history between from to
router.post(
  "/history/time",
  historyController.getMyHistoryByTime,
);
//
// router.get("/history", historyController.get_printing_history);

//buy more page -> almost complete
router.get("/page", pageController.get_page_num);
router.post("/page/buy", pageController.buy_gift_page);
router.post("/page/gift", pageController.buy_gift_page);

module.exports = router;
