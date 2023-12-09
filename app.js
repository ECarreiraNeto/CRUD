const express = require('express')
const app = express()
const logger= require('morgan')


require('dotenv').config()

const indexRouter= require('./routes/index')
const apiRouter= require('./routes/api')
const {connect}= require('./database/connect')

app.use(logger('dev'))
app.use(express.json())
app.use('/index', indexRouter)
app.use('/api', apiRouter)

connect()

module.exports= app;