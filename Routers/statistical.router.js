var express = require('express')
var router = express.Router()

var statisticalController = require('../Controllers/statistical.controller')

router.get('/', statisticalController.statistical)
router.get('/employees', statisticalController.statisticalEmployee)
router.get('/employees/:id', statisticalController.viewEmployee)
router.get('/employees/update/:id', statisticalController.updateEmployee)
router.get('/employees/delete/:id', statisticalController.deleteEmployee)

router.post('/employees/update/:id', statisticalController.postUpdateEmployee)


module.exports = router;