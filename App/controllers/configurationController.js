const configuration = require("../models/configurationModel");
const history = require("../models/historyModel");
const student = require("../models/studentModel");

class ConfigurationController {
  check_valid_file(req, res) {
    var file_name = req.body.valid_file;
    configuration.read_valid_file(file_name, function (data) {
      if (data) {
        if (data.length === 0) {
          res.json({ isValidFile: false });
        } else {
          res.json({ isValidFile: true });
        }
      } else {
        res.status(500).json({ error: "cannot get valid file" });
      }
    });
  }

  get_current_page_num(student_id) {
    student.read_current_page_num(student_id, function (data) {
      if (data) {
        return data;
      }
    });
  }

  configure_printing(req, res) {
    // post
    var file_name = req.body.file_name;
    var printer_id = req.body.printer_id;
    var copies_num = req.body.copies_num;
    var side = req.body.side;
    var page_num = req.body.page_num;
    var page_constraint = req.body.page_constraint;
    var page_size = req.body.page_size;
    var student_id = req.body.student_id;

    // calculate page count
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

    //check page_count < current_page
    var current_page = this.get_current_page_num(student_id);

    res.json({ message: current_page });

    // if (page_count > current_page) {
    //   res.json({ message: "current to print > current page" });
    // } else {
    //   //update current page
    //   current_page -= page_count;
    //   student.update_current_page_num(
    //     student_id,
    //     current_page,
    //     function (data) {
    //       if (!data) {
    //         res.status(500).json({ error: "cannot update current page" });
    //       }
    //     }
    //   );

    //   var start_time = new Date();
    //   start_time.setSeconds(start_time.getSeconds() - page_count);
    //   var end_time = new Date();

    //   // create history
    //   history.create_new_history(
    //     student_id,
    //     printer_id,
    //     file_name,
    //     start_time,
    //     end_time,
    //     page_num,
    //     page_size,
    //     function (data) {
    //       if (data) {
    //         if (data.length === 0) {
    //           res.json({ isValidFile: false });
    //         } else {
    //           res.json({ isValidFile: true });
    //         }
    //       } else {
    //         res.status(500).json({ error: "cannot create new history" });
    //       }
    //     }
    //   );
    // }
  }
}

module.exports = new ConfigurationController();
