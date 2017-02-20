// mongoose schemas
const Users = require('./models/user');
const Polls = require('./models/poll');

// callback signature (error, [list of polls]) => {}
const getPolls = (offset = 0, cb) => {
  Polls.find()
    .skip(offset)
    .limit(6)
    .exec((err, docs) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, docs);
    });
};

// callback signature (error, newlyCreatedPoll) => {}
const createPoll = (authorId, pollName, canAddNewOptions, options, cb) => {
  if (!authorId) {
    cb(new Error('You must be logged in to create a poll!'));
    return;
  }
  let arr = options.map((option) => {
    return { option: option, count: 0 };
  });
  Polls.create({
    authorId,
    options: arr,
    name: pollName,
    canAddNewOptions
  }, (err, doc) => {
    if (err) {
      cb(err);
      return;
    }
    Users.findById(authorId, '', {}, (err, user) => {
      if (err) {
        console.log(err);
        return;
      }
      if (user === null) {
        cb('User not found');
        return;
      }
      user.createdPolls.push({ id: doc._id, pollName: doc.name });
      user.save((err, user) => {
        if (err) {
          // console.log(err);
          cb(err);
        }
        cb(null, doc);
      });
    });
  });
};

// callback signature (error, updatedPollDoc) => {}
const addOptionToPoll = (pollId, option, cb) => {
  let poll = Polls.findById(pollId, '', {}, (err, doc) => {
    if (err) {
      cb(err);
      return;
    }
    if (doc === null) {
      cb('No docs found');
      return;
    }
    if (!doc.canAddNewOptions) {
      cb(null, doc);
      return;
    }
    doc.options.push({option: option, count: 0});
    doc.save((err) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

const removeOptionFromPoll = (pollId, option, cb) => {

};

// callback signature (error, updatedUserDoc) => {}
const addFavoritePoll = (userId, pollId, pollName, cb) => {
  Users.findById(userId, '', {}, (err, doc) => {
    if (err) {
      cb(err);
      return;
    }
    if (doc === null) {
      // console.log('user not found');
      cb('User not found');
      return;
    }
    doc.savedPolls.push({pollId, pollName});
    doc.save((err, doc) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

// callback signature (error, newlyCreatedUser) => {}
const createUser = (githubInfo, cb) => {
  Users.create({
    github: {
      id: '12345',
      displayName: 'testUser' + githubInfo,
      username: 'testUser' + githubInfo + 'Username'
    },
    createdPolls: [],
    savedPolls: []
  }, (err, doc) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, doc);
  });
};

module.exports = {
  getPolls,
  createPoll,
  addOptionToPoll,
  createUser,
  addFavoritePoll
};