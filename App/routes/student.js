const express = require('express');
const route = express.Router();


route.use(express.static('/static'));


route.get('/', (req, res) => {

    if (req.session)
    res.render('layouts/student', {
        id: req.body.id
    });
})

route.get('/:id', (req, res) => {
    res.redirect(`/student?id=${req.params.id}`);
})

module.exports = route;