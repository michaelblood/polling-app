const mongoose = require('mongoose');

const defaultColor = () => {
  return 'grey';
};

const schema = new mongoose.Schema({
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
