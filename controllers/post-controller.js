
module.exports.createPost = async (req, res) => {
	res.json({msg: 'Create Post'})
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