const mongoose = require('mongoose') 

const Schema = mongoose.Schema 
const UserSchema = new Schema({ 
    name: { 
        type: String, 
        length: 40, 
        trim: true, 
        require: true
    }, 
    email: {
        type: String, 
        trim: true, 
        require: true
    }, 
    password: {
        type: String, 
        trim: true, 
        require: true
    }, 
    bio: {
        type: String, 
        trim: true
    }, 
    avatar: String
}, 
{
    timeStamps: true
}) 

const User = new mongoose.model('User', UserSchema); 
module.exports = User; 
