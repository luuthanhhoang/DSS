var db = require('../Database/db.js')

module.exports.statistical = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employees = db.get('Employees').value()
	var male = employees.filter((item) => {
		return item.Gender === "Male"
	})
	var feMale = employees.filter((item) => {
		return item.Gender === "Female"
	})
	res.render('Statistical/index', {
		users: users,
		employees: employees,
		male: male,
		feMale: feMale
	})
}

module.exports.statisticalEmployee = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var employees = db.get('Employees').value()
	res.render('Statistical/employees', {
		users: users,
		employees: employees
	})
}

module.exports.viewEmployee = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var id = req.params.id
	var employee = db.get('Employees').find({Id: id}).value()
	res.render('Statistical/view', {
		users: users,
		employee : employee
	})
}

module.exports.updateEmployee = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var id = req.params.id
	var employee = db.get('Employees').find({Id: id}).value()
	res.render('Statistical/updateemp', {
		users: users,
		employee : employee
	})
}

module.exports.postUpdateEmployee = (req, res) => {
	var id = req.body.Id
	var emp = req.body
	db.get('Employees').remove({ Id: id }).write()
	db.get('Employees').push(emp).write()
	res.redirect('/statistical/employees')
}

module.exports.deleteEmployee = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	var id = req.params.id
	var employee = db.get('Employees').find({Id: id}).value()
	res.render('Statistical/deleteemp', {
		users: users,
		employee: employee
	})
	db.get('Employees').remove({Id: id}).write()
}