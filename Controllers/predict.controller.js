var db = require('../Database/db.js')

module.exports.predict = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	res.render('Predict/index', {
		users: users
	})
}

module.exports.empGroup1 = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employeePre = db.get('EmployeesPre').value()
	var empGroup1 = employeePre.filter(item => {
		return item.AttritionRate < 0.5
	})
	res.render('Predict/group1', {
		users: users,
		empGroup1: empGroup1
	})
}

module.exports.empGroup2 = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employeePre = db.get('EmployeesPre').value()
	var empGroup2 = employeePre.filter(item => {
		return item.AttritionRate >= 0.5 && item.AttritionRate < 0.8
	})
	res.render('Predict/group2', {
		users: users,
		empGroup2: empGroup2
	})
}

module.exports.empGroup3 = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employeePre = db.get('EmployeesPre').value()
	var empGroup3 = employeePre.filter(item => {
		return item.AttritionRate >= 0.8
	})
	res.render('Predict/group3', {
		users: users,
		empGroup3: empGroup3
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