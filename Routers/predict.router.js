var express = require('express')
var router = express.Router()

var predictController = require('../Controllers/predict.controller.js')

router.get('/', predictController.predict)
router.get('/employees', predictController.predictEmployee)

module.exports = router