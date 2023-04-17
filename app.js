const express = require('express')
const cors= require('cors')
const logger = require('morgan')
const app = express()

app.use(express.json())

const indexRouter= require('./routes/index')
const userRouter= require('./routes/user')

app.use('/',indexRouter)
app.use('/home',userRouter)

app.use(logger('dev'))

app.use(cors())

const {connect}= require('./db/db')

connect();

module.exports=app
