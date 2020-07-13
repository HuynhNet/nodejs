var express = require('express');
var router = express.Router();

var async = require('async');
var hash = require('password-hash');

var conn = require('../models/connect_db');
var User = require('../models/usersModel');

/* GET users listing. */
router.get('/get-all-users', function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    User.getAllUser((err, rows) => {
        if(err) throw err;
        // return rows;
        res.end(JSON.stringify(rows));
    });

});

router.post('/add-user', function(req, res, next){
    
});

module.exports = router;
