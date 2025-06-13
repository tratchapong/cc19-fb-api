// This function can handle both sync & async function

module.exports = func => (req, res, next) => {
	try {
		const result = func(req, res, next);
		if (result && typeof result.then === 'function') {
			result.catch(next);
		}
	} catch (err) {
		next(err);
	}
};



// *** all below codes for async function only

// module.exports = (func) => {
// 	return (req, res, next) => func(req, res,next).catch(err => next(err))
//  }

// module.exports = func => (req,res,next) => func(req,res,next).catch(next)

// module.exports = func => {
// 	return async function (req, res, next ) {
// 		try {
// 			await func(req, res, next)
// 		}catch(err) {
// 			next(err)
// 		}
// 	}
// }