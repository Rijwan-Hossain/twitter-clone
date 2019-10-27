const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const mongoose = require('mongoose') 
const userRoute = require('./routes/userRoute') 

const app = express() 

// Middlewere 
app.use(cors()) 
app.use(express.json()) 
app.use(morgan('dev')) 


// Route 
app.use('/api', userRoute) 
app.get('/', (req, res) => { 
    res.status(200).json({ 
        message: 'Hello World for home' 
    }) 
})


// Port Number 
const PORT = process.env.PORT || 4000 

app.listen(PORT, () => { 
    console.log('App is on fire'); 
    mongoose.connect( 
        `mongodb+srv://rijyan:hercules123@twitt-cluster-anjs7.mongodb.net/test?retryWrites=true&w=majority`, 
        {useUnifiedTopology: true, useNewUrlParser: true}, 
        () => console.log('Database Running') 
    ); 
}) 


