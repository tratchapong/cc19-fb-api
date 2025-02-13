const prisma = require('../models')
const bcrypt = require('bcryptjs')

const createError = require("../utils/createError")

function checkEmailorMobile(identity) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const mobileRegex = /^[0-9]{10,15}$/

	let identityKey = ''
	if (emailRegex.test(identity)) {
		identityKey = 'email'
	}
	if (mobileRegex.test(identity)) {
		identityKey = 'mobile'
	}
	if (!identityKey) {
		createError(400, 'only Email or Mobile phone')
	}
	return identityKey
}

module.exports.register = async (req, res, next) => {
	try {
		const { identity, firstName, lastName, password, confirmPassword } = req.body
		// validation
		if (!(identity.trim() && firstName.trim() && lastName.trim() && password.trim() && confirmPassword.trim())) {
			createError(400, 'Please fill all data')
		}

		if (password !== confirmPassword) {
			createError(400, 'please check confirm-password ')
		}

		// identity เป็น email หรือ mobile phone number
		const identityKey = checkEmailorMobile(identity)

		// หาว่ามี user นี้แล้วหรือยัง

		const findIdentity = await prisma.user.findUnique({
			where: { [identityKey]: identity }
		})
		if(findIdentity) {
			createError(409, `Already have this user : ${identity}`)
		}
		
		const newUser = {
			[identityKey] : identity,
			password : await bcrypt.hash(password, 10),
			firstName : firstName,
			lastName : lastName
		}

		const result = await prisma.user.create({data : newUser})
		console.log(result)
		res.json({ msg: `Register successful`, result })
	} catch (err) {
		next(err)
	}

}

module.exports.login = (req, res) => {
	res.json({ msg: 'Login...' })
}

module.exports.getMe = (req, res) => {
	res.json({ msg: 'Getme...' })
}