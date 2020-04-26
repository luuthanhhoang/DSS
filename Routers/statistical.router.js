var express = require('express')
var router = express.Router()

var statisticalController = require('../Controllers/statistical.controller')

router.get('/', statisticalController.statistical)
router.get('/room', statisticalController.statisticalRoom)

module.exports = router;