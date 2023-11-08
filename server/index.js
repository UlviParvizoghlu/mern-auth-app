const express = require('express')
const mongoose =  require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})
const app = express()

app.listen(4000, ()=>{
    console.log('Server is running');
})


