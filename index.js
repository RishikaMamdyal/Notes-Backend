const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const noteRoutes = require('./noteApi')

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use('/note',noteRoutes)

mongoose.connect('mongodb+srv://rishika:fP3GeVKrqFRsCf0L@notecluster.wzpa4.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log("Connected to MongoDB")
})
.catch((err) =>{
    console.error("Error connection to MongoDB: "+err.message)
});

server.listen(4103,()=>{
    console.log('Server running on port 4103.....')
});