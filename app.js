const express = require('express')
// const html = require('html')
const cookie = require('cookie-parser')

const app = express()

const router = require('./router')
const gatekeeper = require('./gatekeeper')

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use('/', router)

app.use('/login', gatekeeper)

app.listen(9000)