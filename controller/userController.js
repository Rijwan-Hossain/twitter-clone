const User = require('../model/User') 
const bcrypt = require('bcryptjs') 

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
                        error: err
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
                            message: 'Registration Successful' 
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
    registration 
} 

