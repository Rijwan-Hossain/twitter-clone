const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const mongoose = require('mongoose') 

const app = express() 

// Middlewere 
app.use(cors()) 
app.use(morgan('dev')) 
app.use(express.json()) 
// Route 

// Port Number 
const PORT = process.env.PORT || 4000 

app.listen(PORT, () => { 
    console.log('App is on fire'); 
    mongoose.connect( 
        `Database online link`, 
        {useNewUrlParser: true}, 
        () => console.log('Database Running') 
    ); 
}) 


