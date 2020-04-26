var express = require('express')
var router = express.Router()

var authController = require('../controllers/auth.controller.js')

router.get('/login', authController.login)
router.get('/registration', authController.registration)

router.post('/login', authController.postLogin)
router.post('/registration', authController.postRegistration)

module.exports = router