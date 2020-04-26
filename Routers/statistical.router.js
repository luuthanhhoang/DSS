var express = require('express')
var router = express.Router()

var statisticalController = require('../Controllers/statistical.controller')

router.get('/', statisticalController.statistical)

module.exports = router;