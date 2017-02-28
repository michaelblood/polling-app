const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const schema = new mongoose.Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    avatar: String
  },
  twitter: {
    id: String,
    displayName: String,
    username: String,
    avatar: String
  },
  loginMethod: String,
  createdPolls: [ String ],
  savedPolls: [ String ]
});

module.exports = mongoose.model('User', schema);
