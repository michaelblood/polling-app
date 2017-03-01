const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const shortid = require('shortid');

const defaultColor = () => {
  let n = Math.floor(Math.random() * 256);
  let color = n.toString(16);
  color = color + color + color;
  return `#${color}`;
};

const schema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  created: { type: Date, default: Date.now },
  name: String,
  authorId: String,
  options: [{
    option: String,
    color: { type: String, default: defaultColor },
    count: { type: Number, default: 0 }
  }],
  voters: [ String ],
  canAddNewOptions: { type: Boolean, default: true }
});

module.exports = mongoose.model('Poll', schema);
