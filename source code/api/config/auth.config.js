const bcrypt = require('bcrypt');

module.exports = {
    secret: "$2y$04$H5jNaA.UTdTYMjNnE9CRL.A7xqpNMl9eACUji5er7MBHQvEuRomJu",
    salt: seed => {
        return bcrypt.genSaltSync(seed || 10);
    },
    hash: plain => {
        return bcrypt.hashSync(plain, this.salt);
    }
};