const express = require('express')
const authMiddleware = require('../middlewares/authJwt.js');

const router = express.Router()

router.get('/', authMiddleware.verifyToken, (req, res) => {
    res.send("Student content");
})

// user/history
// tho lam
router.get('/history', authMiddleware.verifyToken, (req, res) => {

})
//tien lam
router.post('/printing', authMiddleware.verifyToken, (req, res) => {

})
// tien lam
router.get('/buy', authMiddleware.verifyToken, (req, res) => {

})





module.exports = router;