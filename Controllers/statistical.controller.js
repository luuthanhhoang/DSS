var db = require('../Database/db.js')

module.exports.statistical = (req, res) => {
	var users = db.get('users').find({id: req.cookies.userCookie}).write();
	res.render('Statistical/index', {
		users: users
	})
}