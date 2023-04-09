const express= require('express')
const router = express.Router()
const controller = require('../controller/userController')

router.get('/ver',controller.listar)
router.post('/crear',controller.crear)
router.put('/eliminar',controller.eliminar)

module.exports = router