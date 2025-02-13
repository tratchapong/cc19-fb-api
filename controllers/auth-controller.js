const createError = require("../utils/createError")

module.exports.register = (req, res) => {
	const {identity, firstName, lastName, password, confirmPassword} = req.body
	// validation
	if( !(identity.trim() && firstName.trim() && lastName.trim() && password.trim() && confirmPassword.trim()) ) {
		createError(400, 'Please fill all data')
	}

	if( password !== confirmPassword) {
		createError(400, 'please check confirm-password ')
	}
	console.log('After...validate')

	res.json({msg : 'Register...'})
}

module.exports.login = (req, res) => {
	res.json({msg : 'Login...'})
}

module.exports.getMe = (req, res) => {
	res.json({msg : 'Getme...'})
}