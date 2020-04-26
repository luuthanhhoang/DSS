var db = require('../Database/db.js')

module.exports.authLogin = (req, res, next) => {
	if (!req.cookies) {
		res.redirect('/auth/login')
		return;
	};

	var user = db.get('users').find({id : req.cookies.userCookie}).value()
	if(!user){
		res.redirect('/auth/login')
		return;
	};

	res.locals.user = user;
	next();
}