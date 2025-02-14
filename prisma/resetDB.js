require('dotenv').config()
const prisma = require('../models')

// beware order of table to delete
async function resetDatabase() {
	await prisma.$transaction([
		prisma.comment.deleteMany(),
		prisma.like.deleteMany(),
		prisma.post.deleteMany(),
		prisma.relationship.deleteMany(),
		prisma.user.deleteMany(),
	])
  await prisma.$executeRawUnsafe('Alter Table User auto_increment=1')
}

console.log('Reset DB...')
resetDatabase()
