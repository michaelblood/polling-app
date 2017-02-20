const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  github: {
    id: String,
    displayName: String,
    username: String
  },
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