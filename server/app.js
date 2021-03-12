var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('/404', function(req, res){
  res.status(404).sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('*', function(req, res){
  console.log('the original url is ' + req.url);
  res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
})



module.exports = app;
