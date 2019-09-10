var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');

// we are creating a simple javascript array instead of requesting data from database for simplicity
// we will use this array to perform CRUD operations
let users = [{ id: 1, name: 'Mohan', address: 'Noida', contact: '9778854321' }]

// these are the 3 methods(get,get and post) in our rest API 
// 1st method get is to get the list of all the users 
// 2nd method is also a get method but it gives us only one user's details
// 3rd method is post which is to add a new user in the user's array
router.get('/users', function(req, res, next) {
    //we are sending data in json format in response
    // we can also send status code as well as data response using following command
    //By default status code is  200 but we can send other codes as well
    res.status(HttpStatus.OK).json(users);
}).get('/users/:id', function(req, res) {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].id)
            return res.status(HttpStatus.OK).json(users[i]);
    }
    return res.status(HttpStatus.NO_CONTENT).send();
}).post('/users', function(req, res) {
    let user = req.body;
    users.push(user);
    return res.status(HttpStatus.CREATED).send();
}).delete('/users/:id', function(req, res) {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].id)
            return res.status(HttpStatus.OK).send();
    }
    return res.status(HttpStatus.BAD_REQUEST).send();
});

module.exports = router;