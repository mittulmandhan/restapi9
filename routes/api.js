var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');

// we are creating a simple javascript array instead of requesting data from database for simplicity
// we will use this array to perform CRUD operations
let users = [{ id: 1, name: 'Mohan', address: 'Noida', contact: '9778854321' }]

router.get('/users', function(req, res, next) {
    //we are sending data in json format in response
    // we can also send status code as well as data response using following command
    //By default status code is  200 but we can send other codes as well
    res.status(HttpStatus.OK).json(users);
})

module.exports = router;