const config = require('../config/auth.config.js');
const Account = require('../models/account.model.js');
const bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');


exports.signin = (req, res, next) => {
    Account.findById(req.body.account_id, (err, data) => {
        console.log(err);
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found account with id ${req.body.account_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving account with id " + req.body.account_id,
                });
            }
        } else {

            const passwordIsValid = bcrypt.compareSync(req.body.password, data.password);

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            const payload = {
                bknetid: req.body.bknetid,
                role: req.body.role
            }

            const token = jwt.sign(
                payload,
                config.secret,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 2 * 60 * 60, // 2 hours
                }
            );

            res.status(200).send({
                account_id: req.body.account_id,
                role: req.body.role,
                accessToken: token
            });
        }
    });

}