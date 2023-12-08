const con = require("./index");

class ConfigurationModel {
  read_configuration(result) {
    con.query("SELECT * FROM configuration", function (err, configuration) {
      if (err) {
        result(null);
      } else {
        result(configuration);
      }
    });
  }

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
}

module.exports = new ConfigurationModel();
