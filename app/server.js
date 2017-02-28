const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const routes = require('./routes/routes');
const apiRoutes = require('./routes/api.routes.js');
require('../config/passport')(passport);

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);

app.use(session({
  secret: 'barbadoslim',
  resave: false,
  saveUninitialized: true
}));

// app.enable('trust proxy');
app.use(passport.initialize());
app.use(passport.session());

apiRoutes(app, passport);
routes(app, passport);

module.exports = app;