const s = require('sequelize');
const crypto = require("crypto");

module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        bknetid: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull:false
        },
        role: {
            type: Sequelize.STRING
        }
    });

    return Account;
}