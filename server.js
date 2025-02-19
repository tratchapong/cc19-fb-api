require('dotenv').config()
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/errorMiddleware')
const authRoute = require('./routes/auth-route')
const postRoute = require('./routes/post-route')
const app = express()

// app.use(cors({
// 	origin: 'http://localhost:5173',
// }))
// 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(helmet())
app.use(cors())

app.use(express.json())

app.use('/auth', authRoute)
app.use('/post', postRoute)
app.use('/comment',(req, res)=>{ res.send('comment service')})
app.use('/like',(req, res)=>{ res.send('like service')})


// notFound
app.use( notFound )

// error Middleware
app.use(errorMiddleware )

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on ',port) )
