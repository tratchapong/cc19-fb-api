const createError = require("../utils/createError")

function checkEmailorMobile(identity) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const mobileRegex = /^[0-9]{10,15}$/

	let identityKey = ''
	if(emailRegex.test(identity)) {
		identityKey = 'email'
	}
	if(mobileRegex.test(identity)) {
		identityKey = 'mobile'
	}
	if(!identityKey) {
		createError(400, 'only Email or Mobile phone')
	}
	return identityKey
}

module.exports.register = (req, res) => {


	const {identity, firstName, lastName, password, confirmPassword} = req.body
	// validation
	if( !(identity.trim() && firstName.trim() && lastName.trim() && password.trim() && confirmPassword.trim()) ) {
		createError(400, 'Please fill all data')
	}

	if( password !== confirmPassword) {
		createError(400, 'please check confirm-password ')
	}

	// identity เป็น email หรือ phone number
	const identityKey = checkEmailorMobile(identity)
	
	res.json({msg : `Register with ${identityKey}`})
}

module.exports.login = (req, res) => {
	res.json({msg : 'Login...'})
}

module.exports.getMe = (req, res) => {
	res.json({msg : 'Getme...'})
}