
module.exports.createPost = async (req, res) => {
	console.log(req.body)
	const {message} = req.body
	console.log(req.file)
	res.json({msg: 'Create Post', filename: req.file.originalname, message: message})
}
module.exports.getAllPosts = async (req, res) => {
	res.json({msg: 'Get all Post'})
}
module.exports.updatePost = async (req, res) => {
	res.json({msg: 'Update Post'})
}
module.exports.deletePost = async (req, res) => {
	res.json({msg: 'Delete Post'})
}