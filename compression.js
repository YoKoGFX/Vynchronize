var compression = require('compression')
var express = require('express')
 
var app = express()
 
// compress all responses
app.use(compression())
