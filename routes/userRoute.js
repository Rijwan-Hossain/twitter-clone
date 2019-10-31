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

route.post('/registration', registration) 
route.post('/login', login) 
route.get('/logout', logout) 
route.get('/users', users) 
route.get('/user/:id', singleUser) 
route.patch('/user/:id', updateUser) 

module.exports = route; 