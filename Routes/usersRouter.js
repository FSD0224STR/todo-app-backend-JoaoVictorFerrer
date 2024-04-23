const express = require('express')
const router = express.Router();
const {getUser,loggerUser} = require('../controllers/userController')

router.get('/',getUser) //obtener informacion del usuraio
router.post('/login',loggerUser) //login user


module.exports = router;