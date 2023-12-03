const db = require('../models');
const Account = db.accounts;
const Op = db.Sequelize.Op;


// Find a single Account with an id
exports.findAccountWithBknetid = (bknetid) => {
    return Account.findOne({ where: { bknetid: bknetid } });
};

