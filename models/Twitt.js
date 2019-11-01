const mongoose = require('mongoose') 

const Schema = mongoose.Schema 
const TwittSchema = new Schema({ 
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    body: { 
        type: String, 
        required: true 
    }, 
    imageUrl: String, 
    upVote: { 
        type: Number, 
        default: 0 
    }, 
    downVote: { 
        type: Number, 
        default: 0 
    } 
}, 
{ 
    timestamps: true 
}) 

const Twitt = new mongoose.model('Twitt', TwittSchema)

module.exports = Twitt 
