// mongoose schemas
const Users = require('./models/user');
const Polls = require('./models/poll');

// callback signature (error, [list of polls]) => {}
const getPolls = (offset = 0, cb) => {
  Polls.find({}, {__v: false, voters: false})
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

const getPollById = (id, cb) => {
  if (!id) {
    cb('You must specify an id');
    return;
  }
  Polls.findById(id, { __v: false, voters: false }, (err, poll) => {
    if (err) {
      cb(err);
      return;
    }
    if (!poll) {
      cb('Poll not found');
      return;
    }
    cb(null, poll);
  })
};

const getRandomPoll = (cb) => {
  Polls.find({}, {__v: false, voters: false}, (err, polls) => {
    if (err) {
      cb(err);
      return;
    }
    if (polls.length < 1) {
      cb(null, null);
    }
    let rand = Math.floor(Math.random() * polls.length);
    cb(null, polls[rand]);
  });
}

const deletePoll = (requesterId, pollId, cb) => {
  Users.findById(requesterId, (err, user) => {
    if (err) {
      cb(err);
      return;
    }
    if (!user) {
      cb('User not found');
      return;
    }
    if (user.createdPolls.indexOf(pollId) < 0) {
      cb(`You don't own that poll`);
      return;
    }
    let polls = user.createdPolls.filter((el) => {
      return el !== pollId;
    });
    user.createdPolls = polls;
    user.save((err,doc) => {
      if (err) {
        cb(err);
        return;
      }
      Polls.findByIdAndRemove(pollId).exec((err, poll) => {
        if (err) {
          cb(err);
          return;
        }
        cb(null, 'Deleted successfully');
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
const createPoll = (authorId, pollName, canAddNewOptions, obj, cb) => {
  if (!authorId) {
    cb('You must be logged in to create a poll!');
    return;
  }
  let options = [];
  let colors = [];
  for (let prop in obj) {
    let op = obj[prop]
    if (op) {
      options.push(op.text);
      colors.push(op.color);
    }
  }

  let arr = options.map((option, index) => {
    return { option: option, color: colors[index], count: 0 };
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
      user.createdPolls.push(doc._id);
      user.save((err) => {
        if (err) {
          console.log(err);
          cb(err);
        }
        cb(null, doc);
      });
    });
  });
};

// callback signature (error, updatedPollDoc) => {}
const addOptionToPoll = (pollId, option, color, cb) => {
  Polls.findById(pollId, '', {}, (err, doc) => {
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
    let newOption = {option, count: 0};
    if (color) newOption.color = color;
    doc.options.push(newOption);
    doc.save((err) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};
const removeOptionFromPoll = (pollId, optionId, cb) => {
  Polls.findById(pollId, (err, poll) => {
    if (poll.options.length < 3) {
      cb(`cannot have less than 2 options`);
      return;
    }
    poll.options.pull(optionId);
    poll.save((err, doc) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

// callback signature (error, updatedUserDoc) => {}
const addFavoritePoll = (userId, pollId, cb) => {
  Users.findById(userId, '', {}, (err, doc) => {
    if (err) {
      cb(err);
      return;
    }
    if (doc === null) {
      cb('User not found');
      return;
    }
    doc.savedPolls.push(pollId);
    doc.save((err, doc) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    });
  });
};

const removeFavoritePoll = (userId, pollId, cb) => {
  if (!userId || !pollId) {
    cb('missing parameter');
    return;
  }
  Users.findById(userId, (err, user) => {
    if (err) {
      cb(err);
      return;
    }
    if (user === null) {
      cb('user not found');
      return;
    }
    let polls = user.savedPolls.filter(el => (el === pollId));
    user.savedPolls = polls;
    user.save((err, doc) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, doc);
    })
  });
};

const getSpecificPolls = (pollIds, cb) => {
  Polls.find({ _id: {
    $in: pollIds
  }}, { __v: false, voters: false }, (err, docs) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, docs);
  });
};

const getFavoritePolls = (userId, offset = 0, cb) => {
  Users.findById(userId, (err, user) => {
    if (err) {
      cb(err);
      return;
    }
    if (user.savedPolls.length - offset < 0) {
      cb(null, [], -1);
      return;
    }
    let nextPage = offset + 6;
    if (user.savedPolls.length < nextPage) {
      nextPage = -1;
    }
    let pollIds = user.savedPolls.slice(offset, offset+6);
    getSpecificPolls(pollIds, (err, polls) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, polls, nextPage)
    });
  });
};

const getCreatedPolls = (userId, offset = 0, cb) => {
  Users.findById(userId, (err, user) => {
    if (err) {
      cb(err);
      return;
    }
    if (user.createdPolls.length - offset < 0) {
      cb(null, [], -1);
      return;
    }
    let nextPage = offset + 6;
    if (user.createdPolls.length < nextPage) {
      nextPage = -1;
    }
    let pollIds = user.createdPolls.slice(offset, offset+6);
    getSpecificPolls(pollIds, (err, polls) => {
      if (err) {
        cb(err);
        return;
      }
      cb(null, polls, nextPage);
    });
  });
};

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
  removeFavoritePoll,
  getFavoritePolls,
  getCreatedPolls,
  getPollById,
  getRandomPoll
};
