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

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode: statusCode
    })
})



