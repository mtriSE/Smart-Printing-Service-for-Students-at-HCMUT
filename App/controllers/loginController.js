const crypto = require('crypto');

const users = [
    {
        "bknetid": "2115099",
        "pwd": crypto.createHash('sha256').update("12345678").digest('base64'),
        "priv": 1,
    },
    {
        "bknetid": "12345678",
        "pwd": crypto.createHash('sha256').update("12345678").digest('base64'),
        "priv": 0
    }

]

class LoginController {
    constructor(id, pwd, priv) {
        this.bknetid = id;
        this.pwd = this.getHashedPassword(pwd);
        this.priv = priv;
    }
    getHashedPassword(password) {
        const sha256 = crypto.createHash('sha256');
        const hash = sha256.update(password).digest('base64');
        return hash;
    }
    validate() {
        const searchUser = users.find((user) => {
            return this.bknetid === user.bknetid && this.pwd === user.pwd && this.priv == user.priv
        });
        
        return searchUser;
    }
    generateAuthToken() {
        return crypto.randomBytes(30).toString('hex');
    }

}

module.exports = LoginController;