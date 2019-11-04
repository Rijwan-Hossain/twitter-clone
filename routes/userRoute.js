const express = require('express') 
const route = express.Router() 
const { 
    registration, 
    login, 
    logout, 
    users, 
    singleUser, 
    updateUser 
} = require('../controllers/userController') 
const authenticate = require('../middlewares/authentication')

// domain/api/registration
route.post('/registration', registration) 
route.post('/login', login) 
route.patch('/logout', logout) 
route.get('/users', users) 
route.get('/user/:id', singleUser) 
route.patch('/user/:id', updateUser) 

module.exports = route; 