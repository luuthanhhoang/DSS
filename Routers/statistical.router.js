var express = require('express')
var router = express.Router()

var statisticalController = require('../Controllers/statistical.controller')

router.get('/', statisticalController.statistical)
router.get('/room', statisticalController.statisticalRoom)
router.get('/employees', statisticalController.statisticalEmployee)

module.exports = router;