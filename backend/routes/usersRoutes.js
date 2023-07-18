const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getUserData } = require('../controllers/usersControllers')

const { protect } = require('../middleware/authMiddleware')

//rutas publicas
router.post('/', registerUser)
router.post('/login', loginUser)

//ruta privada
router.get('/getMe', protect, getUserData)

module.exports = router