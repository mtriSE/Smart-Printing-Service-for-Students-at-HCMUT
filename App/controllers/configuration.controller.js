const configuration = require("../models/configuration.model");
const history = require("../models/history.model");
const student = require("../models/student.model");

// const { readFileSync } = require("fs");
// const countPages = require("page-count");

class ConfigurationController {
  check_valid_file(req, res) {
    var file = req.file;
    res.json(file);
    // const docxBuffer = readFileSync(file.path);
    // const pages = await countPages(docxBuffer, "pdf");

    // res.json({ pages });

    // configuration.read_valid_file(file, function (valid_file) {
    //   if (valid_file) {
    //     if (valid_file.length === 0) {
    //       res.json({ isValidFile: false });
    //     } else {
    //       res.json({ isValidFile: true });
    //     }
    //   } else {
    //     res.status(500).json({ error: "cannot get valid file" });
    //   }
    // });
  }

  configure_printing(req, res) {
    // post
    var file_name = "CNPM.pdf";
    var printer_id = req.body.printer_id;
    var copies_num = req.body.copies_num; // 1,2,3,...
    var side = req.body.side; // 1,2
    var page_num = req.body.page_num; // '1,2-3,4-8'
    var page_constraint = req.body.page_constraint; // odd,even,all
    var page_size = req.body.page_size; // A3,A4
    var student_id = req.body.student_id;

    // calculate page count
    if (empty(page_num)) {
      page_count = "1-20";
    }
    var page_count = 0;
    var page_num_array = page_num.split(",");
    for (let page_range of page_num_array) {
      if (page_range.includes("-")) {
        page_range = page_range.split("-");
        var page_start = page_range[0];
        var page_end = page_range[1];
        var page_range_count = page_end - page_start + 1;
        if (page_constraint === "all") {
          page_count += page_range_count;
        } else if (
          (page_constraint === "odd" &&
            page_start % 2 === 1 &&
            page_end % 2 === 1) ||
          (page_constraint === "even" &&
            page_start % 2 === 0 &&
            page_end % 2 === 0)
        ) {
          page_count += Math.ceil(page_range_count / 2);
        } else {
          page_count += Math.floor(page_range_count / 2);
        }
      } else {
        page_range = Number(page_range);
        if (
          !(
            (page_constraint === "odd" && page_range % 2 === 0) ||
            (page_constraint === "even" && page_range % 2 === 1)
          )
        ) {
          page_count++;
        }
      }
    }

    if (side == 2) {
      page_count = Math.ceil(page_count / 2);
    }
    page_count *= Number(copies_num);

    let current_page;
    //check page_count < current_page
    student.read_current_page_num(student_id, function (cur_page) {
      if (cur_page) {
        current_page = cur_page;
      } else {
        res.status(500).json({ error: "cannot get current page num" });
      }
    });

    setTimeout(function () {
      if (page_count > current_page) {
        res.json({ message: "current to print > current page" });
      } else {
        //update current page
        student.update_current_page_num(
          student_id,
          -page_count,
          function (result) {
            if (!result) {
              res.status(500).json({ error: "cannot update current page" });
            }
          }
        );

        var printing_date = new Date();

        var start_time = new Date();
        start_time.setSeconds(start_time.getSeconds() - page_count);
        var end_time = new Date();

        //create history
        history.create_printing_history(
          student_id,
          printer_id,
          file_name,
          start_time,
          end_time,
          page_count,
          page_size,
          printing_date,
          function (result) {
            if (result) {
              res.json({ message: "printing completely" });
            } else {
              res.status(500).json({ error: "cannot create new history" });
            }
          }
        );
      }
    }, 100);
  }

  get_configuration(req, res) {
    configuration.read_configuration(function (configuration) {
      if (configuration) {
        res.json(configuration);
      } else {
        res.status(500).json({ error: "cannot read configuration" });
      }
    });
  }

  set_configuration(req, res) {
    var default_date = req.body.default_date;
    var default_page = req.body.default_page;
    configuration.update_configuration(
      default_date,
      default_page,
      function (config) {
        if (!config) {
          res.status(500).json({ error: "cannot update configuration" });
        }
      }
    );

    var file_types = req.body.file_types;
    // res.json(file_types);
    configuration.update_file_type(file_types, function (file_type) {
      if (file_type) {
        res.json(file_type);
      } else {
        res.status(500).json({ error: "cannot update file_type" });
      }
    });
  }
}

module.exports = new ConfigurationController();
