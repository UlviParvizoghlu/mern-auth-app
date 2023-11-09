const User = require("../models/user.model")
const bcryptjs = require('bcryptjs');
const errorHandler = require("../utils/error");
const signUp = async (req,res, next) =>{
    const {username , email, password} = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username: username, email: email, password: hashedPassword})
    try {
        await newUser.save()
        res.status(201).json({message: "User created"})
    } catch (error) {
        next(errorHandler(300, error.message))
    }
}

module.exports = {signUp}