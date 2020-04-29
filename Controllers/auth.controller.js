var db = require('../Database/db.js')
const shortid = require('shortid')

module.exports.login = (req, res) => {
	res.render('Auth/login')
};

module.exports.postLogin = (req, res) => {
	var userEmail = req.body.email;
	var user = db.get('users').find({email:userEmail}).value()
	if(!user){
		res.render('auth/login', {
			errors : [
				'Tài khoản không tồn tại!'
			],
			values : req.body 
		})
		return;
	}

	if(req.body.password !== user.password){
		res.render('auth/login', {
			errors: [
				'Mật khẩu không chính xác!'
			], 
			values : req.body
		})
		return;
	}
	res.cookie('userCookie', user.id)
	res.redirect('/statistical/employees')
};


module.exports.registration = (req, res) => {
	res.render('auth/registration')
};

module.exports.postRegistration = (req, res) => {
	var user = db.get('users').find({email: req.body.email}).value()
	if (user) {
		res.render('auth/registration', {
			newErrors : [
				'Email đã tồn tại, vui lòng đăng nhập để sử dụng!'
			]
		})
		return;
	}
	var newErrors = [];

	if (!user) {
		if(!req.body.name){
			newErrors.push('Tên không được để trống!')
		}
		if(!req.body.email){
			newErrors.push('Email không được để trống!')
		}
		if(!req.body.password){
			newErrors.push('Mật khẩu không được để trống!')
		}
		if (req.body.password !== req.body.cfPassword) {
			newErrors.push('Xác nhận mật khẩu không chính xác!')
		}

		if (newErrors.length > 0) {
			res.render('auth/registration', {
				newErrors: newErrors
			})
		} else {
			req.body.id = shortid.generate()
			db.get('users').push(req.body).write()
			res.redirect('/auth/login')
		}
	}
};