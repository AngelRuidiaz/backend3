const express= require('express')
const router = express.Router()
const controller = require('../controller/userController')
const {check,validationResult}=require ("express-validator")

const {validar}= require("../middlewares/validarID")

router.get('/ver',controller.listar)
router.get('/ver/:id',validar, controller.buscarPorId)
router.post('/crear',
[check ("medicamento").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),
check ("laboratorio").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),
check ("precio").not().notEmpty().withMessage("el campo es obligatorio"),
check ("descripcion").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),check ("marca").isString().withMessage("el campo debe ser un string"),
check ("enStock").not().notEmpty().withMessage("el campo es obligatorio")],
controller.crear)

router.put('/editar/:id',
[check ("medicamento").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),
check ("laboratorio").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),
check ("precio").not().notEmpty().withMessage("el campo es obligatorio"),
check ("descripcion").not().notEmpty().withMessage("el campo es obligatorio").isString().withMessage("el campo debe ser un string"),check ("marca").isString().withMessage("el campo debe ser un string"),
check ("enStock").not().notEmpty().withMessage("el campo es obligatorio")],
controller.editar)

router.delete('/eliminar/:id',validar,controller.eliminar)
module.exports = router