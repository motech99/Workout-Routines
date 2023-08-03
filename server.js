var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
var MongoStore = require('connect-mongo');

require('dotenv').config();

// Database setup
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var mainPageRouter = require('./routes/main-page');
var exercisesRouter = require('./routes/exercises');
var routinesRouter = require('./routes/routines');

// Express app setup
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session and Passport setup
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Set user data for views
app.use(function (req, res, next){
  res.locals.user = req.user;
  next();
});

// Static files and method override setup
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Route setup
app.use('/', indexRouter);
app.use('/workouts', mainPageRouter);
app.use('/workouts', exercisesRouter);
app.use('/routines', routinesRouter);

// MongoDB store setup
MongoStore.create({
  mongoUrl: process.env.DATABASE_URL
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
