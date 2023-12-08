const con = require("./index");

class ConfigurationModel {
  // read_configuration(result) {
  //   con.query("SELECT * FROM configuration", function (err, configuration) {
  //     if (err) {
  //       result(null);
  //     } else {
  //       result(configuration);
  //     }
  //   });
  // }

  read_file_type(result) {
    con.query("SELECT * FROM file_type", function (err, file_type) {
      if (err) {
        result(null);
      } else {
        result(file_type);
      }
    });
  }

  read_valid_file_by_name(file_name, result) {
    con.query(
      "SELECT valid_file_name FROM configuration WHERE valid_file_name=?",
      file_name,
      function (err, valid_file) {
        if (err) {
          result(null);
        } else {
          result(valid_file);
        }
      }
    );
  }
  read_configuration(result) {
    let sql1 = "SELECT default_page_num, default_date FROM configuration";
    let sql2 = "SELECT file_type from file_type where is_check = 1";
    let config = {
      default_page_num: null,
      default_date: null,
      file_type: [],
    };
    con.query(sql1, function (err, res) {
      if (err) {
        result(null);
      } else {
        config = {
          default_page_num: res[0].default_page_num,
          default_date: res[0].default_date,
        };
        console.log(config);
        con.query(sql2, function (err, res) {
          if (err) {
            result(null);
          } else {
            // config.file_type = res[0].file_type;
            // result(config);
            config.file_type = res.map((row) => row.file_type);
            result(config);
          }
        });
      }
    });
  }
  add_config(data, file_type, callback) {
    const default_page_num = Number(data.default_page_num);
    const default_date = data.default_date;

    let sql1 =
      "UPDATE configuration SET `default_page_num` = ? ,`default_date` = ?";
    con.query(sql1, [default_page_num, default_date], (err, result) => {
      if (err) {
        console.log(err);
        return callback(err, null);
      }
      if (result) {
        // console.log(result);
        // callback(null, result);
      }
      console.log("Configuration updated successfully");

      updateFileType(file_type, (err, result) => {
        if (err) {
          console.log(err);
          return callback(err, null);
        }
        console.log("File types updated successfully");
        callback(null, result);
      });
    });
  }
}
function updateFileType(file_type, callback) {
  // Use a counter to keep track of the number of queries executed
  let queriesExecuted = 0;
  file_type.map((f) => {
    let sql = "UPDATE file_type SET is_check = 1 WHERE `file_type` = ?";
    con.query(sql, [f], (err, result) => {
      // Increment the counter after each query execution
      queriesExecuted++;

      if (err) {
        console.log(err);
        // If an error occurs, stop the execution and return the callback
        return callback(err, null);
      }
      
      // console.log(`File type '${f}' updated successfully`);
      // Check if all queries have been executed
      if (queriesExecuted === file_type.length) {
        callback(null, result);
      }
    });
  });
}
module.exports = new ConfigurationModel();
