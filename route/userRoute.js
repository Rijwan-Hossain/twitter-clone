const express = require('express') 
const route = express.Router() 
const {
    registration
} = require('../controller/userController')

route.post('/registration', registration) 

module.exports = route; 