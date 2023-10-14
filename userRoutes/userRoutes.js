const express = require('express')

const router = express.Router()

const user= require('../userController/userController')




router.post('/user/registraion',(user.userRegistraion))


module.exports = router;