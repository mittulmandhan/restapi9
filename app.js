var express = require('express');
var logger = require('morgan');
var apiRouter = require('./routes/api');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);

module.exports = app;