var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/api', apiRouter);

app.get('/404', function(req, res){
  res.status(404).sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('*', function(req, res){
  console.log('the original url is ' + req.url);
  res.status(200).sendFile(path.join(__dirname + '/public/index.html'));
})


// CUSTOM MIDDLEWARES
app.use(function(req, res, next) {
  req.infoFromMid1 = new Date()
  console.log('middleware-1');
  next();
})
app.use(function(req, res, next) {
  console.log('middleware-2');
  next();
})
app.use(function(req, res, next) {
  console.log('middleware-3', req.infoFromMid1);
  next();
})




module.exports = app;
