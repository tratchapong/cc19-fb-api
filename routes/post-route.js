const express = require('express')
const postRoute = express.Router()
const postController = require('../controllers/post-controller')
const upload = require('../middlewares/upload')
const authenticate = require('../middlewares/authenticate')

// postRoute.use(authenticate)

postRoute.get('/', postController.getAllPosts)
postRoute.post('/', upload.single('image'), postController.createPost)
postRoute.put('/:id',upload.single('image'), postController.updatePost)
postRoute.delete('/:id', postController.deletePost)

module.exports = postRoute