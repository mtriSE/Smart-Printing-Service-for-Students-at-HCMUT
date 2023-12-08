const con = require("./index");

class ConfigurationModel {
  read_configuration(result) {
    con.query(
      "SELECT * FROM configuration,file_type",
      function (err, configuration) {
        if (err) {
          result(null);
        } else {
          result(configuration);
        }
      }
    );
  }

  update_configuration(default_date, default_page, result) {
    con.query(
      "UPDATE configuration SET default_date=?, default_page_num=?",
      [default_date, default_page],
      function (err, configuration) {
        if (err) {
          result(null);
        } else {
          result(configuration);
        }
      }
    );
  }

  update_file_type(file_types, result) {
    con.query(
      "UPDATE file_type SET is_check = CASE WHEN file_type IN (?) THEN 1 ELSE 0 END;",
      [file_types],
      function (err, configuration) {
        if (err) {
          result(null);
        } else {
          result(configuration);
        }
      }
    );
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
}

module.exports = new ConfigurationModel();
