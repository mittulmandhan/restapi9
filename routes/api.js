var express = require('express');
var router = express.Router();
var HttpStatus = require('http-status-codes');

// we are creating a simple javascript array instead of requesting data from database for simplicity
// we will use this array to perform CRUD operations
let users = [{ id: 1, name: 'Mohan', address: 'Noida', contact: '9778854321' }]

// these are the 5 methods(get,get, post, put and delete) in our rest API 
// 1st method get is to get the list of all the users 
// 2nd method is also a get method but it gives us only one user's details
// 3rd method is post which is to add a new user in the user's array
// 4th method is put which is used to update a user's detail
// 5th method is delete which deletes a user from the list
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
    try {
        let user = req.body;
        users.push(user);
        return res.status(HttpStatus.CREATED).send();
    } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).send();
    }
}).put('/users', function(req, res) {
    try {
        let user = req.body;
        for (let i = 0; i < users.length; i++) {
            if (user[i].id === user.id) {
                user[i].name = user.name;
                user[i].address = user.address;
                user[i].contact = user.contact;
                break;
            }
        }
        return res.status(HttpStatus.OK).send();
    } catch (error) {
        return res.status(HttpStatus.BAD_REQUEST).send();
    }
}).delete('/users/:id', function(req, res) {
    let id = req.params.id;
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            users.splice(i, 1);
            return res.status(HttpStatus.OK).send();
        }
    }
    return res.status(HttpStatus.BAD_REQUEST).send();
});

module.exports = router;