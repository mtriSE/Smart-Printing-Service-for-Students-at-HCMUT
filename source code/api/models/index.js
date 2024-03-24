const mysql = require('mysql');
const config = require('../config/db.config.js');

process.env.TZ = "UTC";

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    database: config.DB,
    multipleStatements: true
});

connection.connect(err => {
    if (err) throw err;
    console.log("Successfully connected to the database.");
})

module.exports = connection;