const Twitt = require('../models/Twitt')

// route.post('/twitt') 
const createTwitt = (req, res) => { 
    const twitt = new Twitt({ 
        author: req.body.author, 
        body: req.body.body, 
        display: req.body.display 
    }) 
    
    twitt.save() 
        .then(data => { 
            res.json({ 
                message: 'Success', 
                data 
            }) 
        }) 
        .catch(err => { 
            return res.json({ 
                error: err 
            }) 
        }) 
} 


// route.get('/twitt') 
const getAllTwitt = (req, res) => { 
    Twitt.find() 
        .sort({date:1})
        .populate('author') 
        .then(data => { 
            res.json({ 
                message: 'Success', 
                length: data.length,
                twitts: data 
            }) 
        }) 
        .catch(err => { 
            return res.json({ 
                error: 'Server Error' 
            }) 
        }) 
}


// route.get('/twitt/:id') 
const getSingleTwitt = (req, res) => { 
    let { id } = req.params; 
    Twitt.findById(id) 
        .then(data => { 
            res.json({ 
                message: 'Success', 
                data 
            }) 
        }) 
        .catch(err => { 
            return res.json({ 
                error: 'Server Error' 
            }) 
        }) 
}


// route.patch('/twitt/:id') 
const updateTwitt = (req, res) => { 
    let { id } = req.params; 
    Twitt.findByIdAndUpdate({_id: id}, {$set: req.body}, {new: true}) 
        .then(data => { 
            return res.json({ 
                message: 'Update Successful', 
                data 
            }) 
        }) 
        .catch(err => { 
            return res.json({ 
                error: 'Server Error' 
            }) 
        }) 
} 


// route.delete('/twitt/:id') 
const DeleteTwitt = (req, res) => { 
    let { id } = req.params; 
    Twitt.findByIdAndDelete(id) 
        .then(data => { 
            res.json({ 
                message: 'Successfully Deleted', 
                data 
            }) 
        }) 
        .catch(err => { 
            return res.json({ 
                error: 'Server Error' 
            }) 
        }) 
}


// route.get('/twitt/:id/like') 
const upVoteTwitt = (req, res) => { 
    let { id } = req.params; 
    Twitt.findById(id) 
        .then(twitt => { 
            Twitt.findByIdAndUpdate({_id: id}, {$set: {upVote: twitt.upVote + 1}}, {new: true}) 
                .then(() => { 
                    Twitt.find() 
                        .populate('author') 
                        .then(data => {
                            return res.json({ 
                                message: 'Update Successful', 
                                twitts: data 
                            }) 
                        })
                }) 
            }) 
            .catch(err => { 
                return res.json({ 
                    error: 'Server Error' 
                }) 
            }) 
} 


// route.get('/twitt/:id/dislike') 
const downVoteTwitt = (req, res) => { 
    let { id } = req.params; 
    Twitt.findById(id) 
        .then(twitt => { 
            Twitt.findByIdAndUpdate({_id: id}, {$set: {downVote: twitt.downVote + 1}}, {new: true}) 
                .then(() => {  
                    Twitt.find()  
                    .populate('author') 
                        .then(data => { 
                            return res.json({ 
                                message: 'Update Successful', 
                                twitts: data 
                            }) 
                        }) 
                }) 
            }) 
    
        .catch(err => {
            return res.json({ 
                error: 'Server Error' 
            }) 
        }) 
} 


module.exports = {
    createTwitt, 
    getAllTwitt, 
    getSingleTwitt, 
    updateTwitt, 
    DeleteTwitt, 
    upVoteTwitt, 
    downVoteTwitt 
}
