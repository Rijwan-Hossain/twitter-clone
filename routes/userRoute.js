const express = require('express') 
const route = express.Router() 
const { 
    registration, 
    login, 
    users, 
    singleUser, 
    updateUser 
} = require('../controllers/userController') 

route.post('/registration', registration) 
route.post('/login', login) 
route.get('/users', users) 
route.get('/user/:id', singleUser) 
route.patch('/user/:id', updateUser) 

// user create 
// user login 
// single user 
// user update 

module.exports = route; 