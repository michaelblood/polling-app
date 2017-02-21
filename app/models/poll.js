const mongoose = require('mongoose');
const shortid = require('shortid');

const defaultColor = () => {
  let n = Math.floor(Math.random() * 256);
  let grey = '' + n + ',' + n + ',' + n;
  return `rgb(${grey})`
};

const schema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  created: { type: Date, default: Date.now },
  name: String,
  authorId: String,
  authorName: String,
  options: [{
    option: String,
    color: { type: String, default: defaultColor },
    count: { type: Number, default: 0 }
  }],
  canAddNewOptions: { type: Boolean, default: true }
});

module.exports = mongoose.model('Poll', schema);
