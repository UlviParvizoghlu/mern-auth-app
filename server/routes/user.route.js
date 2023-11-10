const express = require('express')
const {verifyToken} = require('../utils/verifyUser')
const { updateUser, deleteUser } = require('../controllers/user.controller')
const router = express.Router()

router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);

router.get('/', (req,res) =>{
    res.json({
        message: 'Api working'
    })
})
module.exports = router