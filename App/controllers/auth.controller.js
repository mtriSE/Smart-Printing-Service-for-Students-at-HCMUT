
const config = require('../config/auth.config.js');
const accountController = require('./account.controller.js');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

exports.signin = async (req, res, next) => {
    const result = await accountController.findAccountWithBknetid(req.body.bknetid);
    if (!result) {
        return res.status(404).json({
            message: `Not found user with ${req.body.bknetid}`,
        })
    } else {

        const passwordIsValid = req.body.password === result.password;

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
                // expiresIn: 2*60*60, // 2 hours
            }
        );
        
        res.status(200).send({
            bknetid: req.body.bknetid,
            role: req.body.role,
            accessToken: token
        });

    }
}