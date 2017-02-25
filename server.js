const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const routes = require('./app/routes/routes');
const apiRoutes = require('./app/routes/api.routes.js');
require('./config/passport')(passport);
global.Promise = require('bluebird');

const options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
}; 
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test-db';
mongoose.Promise = global.Promise;
mongoose.connect(uri, options);
mongoose.connection.on('error', () => {
  console.log('connection to mlab failed');
  process.exit(1); 
});

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'dist')));
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

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
