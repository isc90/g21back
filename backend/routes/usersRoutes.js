const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getUserData } = require('../controllers/usersControllers')

//rutas publicas
router.post('/', registerUser)
router.post('/login', loginUser)

//ruta privada
router.get('/getMe', getUserData)

module.exports = router