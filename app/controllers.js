// mongoose schemas
const Users = require('./models/user');
const Polls = require('./models/poll');

// callback signature (error, [list of polls]) => {}
const getPolls = (offset = 0, cb) => {
  Polls.find({}, {__v: false})
    .skip(offset)
    .limit(6)
    .exec((err, docs) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, docs || []);
    });
};

const deletePoll = (requesterId, pollId, cb) => {
  Polls.findOneAndRemove({ _id: pollId, authorId: requesterId }, (err, poll) => {
    if (err) {
      cb(err);
      return;
    }
    if (poll.authorId !== requesterId) {
      cb(`You don't own that poll! (or you already deleted it...)`);
      return;
    }
    Users.findById(requesterId, (err, user) => {
      if (err) {
        cb(err);
        return;
      }
      let polls = user.createdPolls;
      polls = polls.filter((el) => {
        return el._id !== pollId;
      });
      user.polls = polls;
      user.save((err,doc) => {
        if (err) {
          cb(err);
          return;
        }
        cb(null, 'Deleted sucessfully');
      });
    });
  });
};

// this could be done a better way, but i got it working once and don't feel like refactoring
// spaghetti!
const incrementOption = (pollId, optionId, userIdOrIp, cb) => {
  Polls.findById(pollId, (err, poll) => {
    if (err) {
      cb(err);
      return;
    }
    if(poll.voters.indexOf(userIdOrIp) >= 0) {
      cb('You already voted on this poll');
      return;
    }
    Polls.update({_id: pollId, 'options._id': optionId }, {$inc: {'options.$.count' : 1}}, (err) => {
      if (err) {
        cb(err);
        return;
      }
      Polls.findById(pollId, (err, poll) => {
        if (err) {
          cb(err);
          return;
        }
        poll.voters.push(userIdOrIp);
        poll.save((err, doc) => {
          if (err) {
            cb(err);
            return;
          }  
          cb(null, doc);
        });
      })
    });
  });
};

// callback signature (error, newlyCreatedPoll) => {}
const createPoll = (authorId, pollName, canAddNewOptions, options, cb) => {
  if (!authorId) {
    cb('You must be logged in to create a poll!');
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

//refactor to use optionId instead of option index
// callback signature (error, updatedUserDoc) => {}
const removeOptionFromPoll = (pollId, optionIndex, cb) => {
  Polls.findById(pollId, '', {}, (err, poll) => {
    if (err) {
      cb(err);
      return;
    }
    if (poll.options.length < 3) {
      cb(`A poll can't have fewer than 2 options`);
      return;
    }
    poll.options.pull(poll.options[optionIndex]);
    poll.save((err) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, poll);
    });
  });
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

// todo
const removeFavoritePoll = (userId, pollId, cb) => {

};
const getFavoritePolls = (userId, cb) => {

};
const getCreatedPolls = (userId, cb) => {

}

// used only for testing other things that require a user. actual user creation is
// done in the passport configuration
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
  addFavoritePoll,
  removeOptionFromPoll,
  deletePoll,
  incrementOption,
  removeFavoritePoll
};
