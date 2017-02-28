const {
  getPolls,
  createPoll,
  addOptionToPoll,
  addFavoritePoll,
  removeOptionFromPoll,
  deletePoll,
  incrementOption,
  removeFavoritePoll,
  getFavoritePolls,
  getCreatedPolls,
  getRandomPoll,
  getPollById
} = require('../controllers');  
const { apiIsLoggedIn } = require('./auth');

module.exports = (app, passport) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/api/amiloggedin', (req, res) => {
    if (req.user) {
      res.status(200).json(req.user);
      return;
    }
    res.status(200).json({error: 'Not logged in'});
  });

  app.get('/api/polls/favorites', apiIsLoggedIn, (req, res) => {
    if (!req.user) {
      res.status(200).json({error: 'not authenticated'});
      return;
    }
    let offset = Math.abs(Number(req.query.offset) || 0);
    getFavoritePolls(req.user._id, offset, (err, polls, nextPageStart) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json({polls, nextPageStart});
    });
  });

  app.get('/api/polls/created', apiIsLoggedIn, (req, res) => {
    if (!req.user) {
      res.status(200).json({error: 'not authenticated'});
      return;
    }
    let offset = Math.abs(Number(req.query.offset) || 0);
    getCreatedPolls(req.user._id, offset, (err, polls, nextPageStart) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json({polls, nextPageStart});
    });
  });
  
  app.get('/api/polls/random', (req, res) => {
    getRandomPoll((err, poll) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      if (!poll) {
        res.status(200).json({error: 'no polls found'});
        return;
      }
      res.status(200).json(poll._id);
    });
  });

  app.get('/api/poll/:id', (req, res) => {
    if (!req.params.id) {
      res.status(200).json({error: 'no id specified'});
      return;
    }
    getPollById(req.params.id, (err, poll) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json(poll);
    })
  });

  app.get('/api/polls/all', (req, res) => {
    let offset = Number(req.query.offset) || 0;
    getPolls(offset, (err, polls) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      if (polls.length < 6) {
        res.status(200).json({polls: polls, nextPageStart: -1});
        return;
      }
      res.status(200).json({ polls: polls, nextPageStart: offset + polls.length });
    });
  });

  app.post('/api/polls/new', (req, res) => {
    let body = req.body;
    if ('string' == typeof req.body) body = JSON.parse(req.body);
    let { pollName, options, canAddNewOptions } = body;
    if (!options || !pollName || (!canAddNewOptions && canAddNewOptions !== false)){
      res.status(200).json({error: 'missing parameter'});
      return;
    }
    if ('string' == typeof option) options = JSON.parse(options);
    if (!req.user) {
      res.status(200).json(({error: 'you must be logged in to do that'}));
      return;
    }
    createPoll(req.user._id, pollName, canAddNewOptions, options, (err, poll) => {
      if (err) {
        res.status(500).json({error: err.toString()});
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/poll/:pollId/delete', (req, res) => {
    if (!req.user) {
      res.json({error: 'not authenticated. how did you even get here?'})
      return;
    }
    let pollId = req.params.pollId;
    let userId = req.user._id;
    deletePoll(userId, pollId, (err, msg) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json({success: msg});
    });
  });

  app.post('/api/poll/:pollId/:optionId/delete', apiIsLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    let optionId = req.params.optionId;
    if (req.user.createdPolls.indexOf(pollId) < 0 ) {
      res.status(200).json({error: `can't delete an option from a poll you don't own`});
      return;
    }
    removeOptionFromPoll(pollId, optionId, (err, poll) => {
      if (err) {
        res.status(200).json({error: err});
        return;
      }
      res.status(200).json(poll);
    });
  });

  app.post('/api/poll/:pollId/new', (req, res) => {
    let pollId = req.params.pollId;
    let body = req.body;
    if ('string' === typeof body) body = JSON.parse(body);
    let newOption = body.option || null;
    if (newOption === null) {
      res.status(200).json({error: 'no new option specified'});
      return;
    }
    let optionColor = body.optionColor || null;
    addOptionToPoll(pollId, newOption, optionColor, (err, poll) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json(poll);
    });
  });

  app.post('/api/poll/:pollId/:optionId', (req, res) => {
    let pollId = req.params.pollId;
    let optionId = req.params.optionId;
    if (req.user) {
      incrementOption(pollId, optionId, req.user._id, (err, poll) => {
        if (err) {
          res.status(200).json({error: err.toString()});
          return;
        }
        res.status(200).json(poll);
      });
      return;
    }
    let ip = req.ip;
    if (req.ips && req.ips.length > 0) {
      ip = req.ips[0];
    }
    incrementOption(pollId, optionId, ip, (err, poll) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.status(200).json(poll);
    });
  });
  

  app.post('/api/poll/:pollId/toggleFavorite', apiIsLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    if (!req.user) {
      res.status(200).json({error: 'something went wrong'});
      return;
    }
    if (req.user.savedPolls.indexOf(pollId) < 0) {
      addFavoritePoll(req.user._id, pollId, (err, poll) => {
        if (err) {
          res.status(200).json({error: err.toString()});
          return;
        }
        res.status(200).json(poll);
      });
      return;
    }
    removeFavoritePoll(req.user._id, pollId, (err, poll) => {
      if (err) {
        res.status(200).json({error: err.toString()});
        return;
      }
      res.send(poll._id);
    });
  });
};
