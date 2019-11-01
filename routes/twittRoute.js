const express = require('express') 
const route = express.Router() 
const { 
    createTwitt, 
    getAllTwitt, 
    getSingleTwitt, 
    updateTwitt, 
    DeleteTwitt, 
    upVoteTwitt, 
    downVoteTwitt 
} = require('../controllers/twittController') 

route.post('/twitt', createTwitt) 
route.get('/twitt', getAllTwitt) 
route.get('/twitt/:id', getSingleTwitt) 
route.patch('/twitt/:id', updateTwitt) 
route.delete('/twitt/:id', DeleteTwitt) 
route.get('/twitt/:id/like', upVoteTwitt) 
route.get('/twitt/:id/dislike', downVoteTwitt) 

module.exports = route; 