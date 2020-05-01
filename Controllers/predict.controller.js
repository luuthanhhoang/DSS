var db = require('../Database/db.js')

module.exports.predict = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	res.render('Predict/index', {
		users: users
	})
}

module.exports.predictEmployee = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employeePre = db.get('EmployeesPre').value()
	res.render('Predict/employeepredict', {
		users: users,
		employeePre: employeePre
	})
}