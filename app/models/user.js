const mongoose = require('mongoose');

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
  createdPolls: [{
    id: String,
    pollName: String
  }],
  savedPolls: [{
    pollId: String,
    pollName: String
  }]
});

module.exports = mongoose.model('User', schema);
