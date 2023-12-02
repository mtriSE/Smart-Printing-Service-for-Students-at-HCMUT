const express = require('express');
const route = express.Router();


route.use(express.static(__dirname + '/static'));


route.get('/', (req, res) => {
    res.render('layouts/spso', {
        id: 2115099
    });
})

route.get('/:id', (req, res) => {
    res.render('layouts/spso', {
        id: req.params.id
    });
})


module.exports = route;