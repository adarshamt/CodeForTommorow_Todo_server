const express = require('express')

const router = express.Router()

const user= require('../userController/userController')




router.post('/user/registraion',(user.userRegistraion))
router.post('/user/login',(user.login))


module.exports = router;