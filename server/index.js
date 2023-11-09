const express = require('express')
const mongoose =  require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
dotenv.config()
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})
const app = express()

app.use(express.json())

app.listen(4000, ()=>{
    console.log('Server is running');
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)



