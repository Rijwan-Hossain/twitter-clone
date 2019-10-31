const User = require('../models/User') 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')

const registration = (req, res) => {
    // get data 
    // validate email 
    // prevent duplicate user
    // hash password 
    // create new user with model 
    // save user

    let { name, email, password } = req.body; 
    
    // validate email 
    let i = 0, validate = false; 
    for(i = 0; i < email.length; i++) {
        if(email[i] === '@') validate = true
    } 
    if(!validate) {
        return res.status(400).json({
            message: 'Enter a valid email'
        })
    }

    // prevent duplicate user 
    User.find({email}) 
        .then(result => { 
            if(result.length > 0) { 
                return res.json({ 
                    message: 'Email already exist'
                }) 
            } 

            // hash password 
            bcrypt.hash(password, 10, (err, hash) => {
                if(err) {
                    return res.json({ 
                        error: 'Server Error'
                    }) 
                }
                    
                // create new user with model 
                const newUser = new User({
                    name, 
                    email, 
                    password: hash 
                }) 
                
                // save user 
                newUser.save() 
                    .then(() => { 
                        return res.json({ 
                            status: 'Success' 
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


const login = (req, res) => { 
    // get data 
    // validate email 
    // check email available or not 
    // password match 
    // set isLogin --> true 
    // create & return token 

    let { email, password } = req.body; 
    console.log(req.body); 

    // validate email 
    let i = 0, validate = false; 
    for(i = 0; i < email.length; i++) { 
        if(email[i] === '@') validate = true
    }  
    if(!validate) { 
        return res.status(400).json({ 
            status: 'Fail',
            invalidEmailMsg: 'Enter a valid email'
        }) 
    } 
    // check email available or not 
    User.findOne({email}) 
        .then(user => { 
            if(!user) { 
                return res.json({ 
                    status: 'Fail', 
                    invalidEmailMsg: 'Incorrect Email' 
                }) 
            } 

            // Password match 
            bcrypt.compare(password, user.password, (err, result) => {
                if(err) {
                    return res.json({ 
                        error: 'Server Error' 
                    }) 
                } 

                if(!result) {
                    return res.json({ 
                        status: 'Fail',
                        invalidPassMsg: 'Wrong Password' 
                    }) 
                } 

                
                User.findByIdAndUpdate( 
                    {_id: user._id}, 
                    {$set: {isLogin: true}}, 
                    {new: true}) 
                    .then(loginUser => { 
                        let payload = {
                            id: loginUser._id, 
                            name: loginUser.name, 
                            email: loginUser.email, 
                            isLogin: loginUser.isLogin, 
                            bio: loginUser.bio || '', 
                            avatar: loginUser.avatar || ''
                        } 

                        const token = jwt.sign(payload, 'SECRET', {expiresIn: '6h'}) 
                        
                        return res.json({ 
                            status: 'Success', 
                            payload,
                            token: `Bearer ${token}`  
                        }) 
                    }) 
                    .catch(err => {
                        return res.json({ 
                            error: 'Server Error' 
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


const users = (req, res) => { 
    User.find() 
        .then(users => { 
            res.json({ 
                users 
            }) 
        }) 
        .catch(err => {
            return res.json({ 
                status: 'Fail',
                error: 'Server Error' 
            }) 
        }) 
}


const singleUser = (req, res) => {
    let { id } = req.params 
    console.log(id);
    
    User.findById(id) 
        .then(user => { 
            console.log(user);
            
            res.status(200).json({ 
                status: 'success',
                user 
            })
        })
        .catch(err => {
            return res.json({ 
                status: 'Fail',
                error: 'Server Error' 
            }) 
        })
}


const updateUser = (req, res) => {
    let { id } = req.params 
    User.findByIdAndUpdate({_id: id}, {$set: req.body}, {new: true}) 
        .then(user => { 
            return res.status(200).json({ 
                status: 'success', 
                user 
            }) 
        }) 
        .catch(err => {
            return res.status(400).json({ 
                status: 'fail', 
                message: 'Server Error'
            }) 
        }) 
} 

module.exports = { 
    registration, 
    login, 
    users, 
    singleUser, 
    updateUser
} 

