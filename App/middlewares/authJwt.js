const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const Account = require('../models/account.model.js');

verifyToken = (req, res, next) => {
    let token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(403).send({ message: "No token provided" });
    }

    jwt.verify(token,
        config.secret,
        (err, decoced) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.user = decoced;
            next();
        }
    );
}

module.exports = {
    verifyToken
}