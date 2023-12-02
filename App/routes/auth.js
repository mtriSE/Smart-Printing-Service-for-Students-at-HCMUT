const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();


router.get('/', (req, res) => {
    if (req.session.userid) {
        if (req.session.role == 0) {
            res.redirect('/spso');
        } else {
            res.redirect('/student');
        }
    } else {
        res.render('layouts/login_layout', {
            noti: "",
        });
    }
});


router.post('/login', (req, res) => {
    const loginCtl = new loginController(req.body.bknetid, req.body.pwd, req.body.priviledge);
    // console.log(loginCtl);

    const user = loginCtl.validate();
    // console.log(user);
    if (user) {
        req.session.userid = req.body.bknetid
        req.session.role = parseInt(req.body.priviledge);

        if (req.session.role == 0) {
            res.redirect('/spso');
        } else {
            res.redirect('/student');
        }
    } else {
        // res.redirect('/auth');
        res.render('layouts/login_layout', {
            noti: "Thông tin đăng nhập không hợp lệ",
        });
    }
});



module.exports = router;