var express = require('express')
var router = express.Router()

var predictController = require('../Controllers/predict.controller.js')

router.get('/', predictController.predict)
router.get('/employees', predictController.predictEmployee)
router.get('/employees/group1', predictController.empGroup1)
router.get('/employees/group2', predictController.empGroup2)
router.get('/employees/group3', predictController.empGroup3)

module.exports = router