const express = require('express')
const router = express.Router();
const {getUserById,loggerUser} = require('../controllers/userController')

router.get('/:id',getUserById) //obtener informacion del usuraio
router.post('/login',loggerUser) //login user


module.exports = router;