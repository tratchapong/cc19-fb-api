const express = require('express')
const authRoute = express.Router()
const {register, login, getMe} = require('../controllers/auth-controller')

authRoute.post('/register', register)
authRoute.post('/login', login )
authRoute.get('/me', getMe )


module.exports = authRoute