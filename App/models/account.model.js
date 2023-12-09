// const s = require('sequelize');
// const crypto = require("crypto");

// module.exports = (sequelize, Sequelize) => {
//     const Account = sequelize.define("account", {
//         bknetid: {
//             type: Sequelize.STRING,
//             allowNull:false,
//             primaryKey: true
//         },
//         password: {
//             type: Sequelize.STRING,
//             allowNull:false
//         },
//         role: {
//             type: Sequelize.STRING
//         }
//     }, {
//         freezeTableName: true
//     });

//     return Account;
// }

const db = require('./index.js');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth.config.js');


const Account = function (account) {
    this.account_id = account.account_id;
    this.password = authConfig.hash(account.password);
    this.role = account.role;
}


Account.create = (newAccount, result) => {
    db.query(`INSERT INTO account SET ?`, newAccount, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created account :", { id: res.insertId, ...newAccount });
        result(null, newAccount);
    });
};

Account.findById = (id, result) => {
    db.query(`SELECT * FROM account WHERE account_id = '${id}'`, (err, res) => {
        if (err){
            console.log("error: ", err);
            result(err,null);
            return;
        }
        // Found 
        if (res.length) {
            // console.log("found account: ", res[0]);
            // console.log(res);
            result(null,res[0]);
            return;
        }
        // not found
        result({kind:"not_found"}, null);
    });
};

module.exports = Account;
// Account.