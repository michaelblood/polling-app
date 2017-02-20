const express = require('express');
const passport = null;
const mongoose = require('mongoose');

const routes = require('./app/routes');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test-db';
mongoose.Promise = require('bluebird');
mongoose.connect(uri);

const app = express();
routes(app, passport);

