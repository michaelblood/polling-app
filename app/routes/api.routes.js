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
  getCreatedPolls
} = require('../controllers');  
const { isLoggedIn } = require('./auth');

module.exports = (app, passport) => {
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.get('/api/amiloggedin', (req, res) => {
    console.log(req.session);
    if (req.user) {
      console.log('user:', req.user);
      res.json(req.user);
      return;
    }
    console.log('not logged in');
    res.json({error: 'Not logged in'});
  });

  app.get('/api/polls', (req, res) => {
    let offset = Number(req.query.offset) || 0;
    getPolls(offset, (err, polls) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      if (polls.length < 6) {
        res.json({polls: polls, nextPageStart: -1});
        return;
      }
      res.json({ polls: polls, nextPageStart: offset + polls.length });
    });
  });

  app.get('/api/polls/favorites', isLoggedIn, (req, res) => {
    let offset = Math.abs(Number(req.query.offset) || 0);
    getFavoritePolls(req.user._id, offset, (err, polls, nextPageStart) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json({polls, nextPageStart});
    });
  });

  app.get('/api/polls/created', isLoggedIn, (req, res) => {
    let offset = Math.abs(Number(req.query.offset) || 0);
    getCreatedPolls(req.user._id, offset, (err, polls, nextPageStart) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json({polls, nextPageStart});
    });
  });
  
  app.post('/api/polls/new', (req, res) => {
    let body = req.body;
    if ('string' == typeof req.body) body = JSON.parse(req.body);
    let { pollName, options, canAddNewOptions } = body;
    if (!options || !pollName || (!canAddNewOptions && canAddNewOptions !== false)){
      res.json({error: 'missing parameter'});
      return;
    }
    if ('string' == typeof option) options = JSON.parse(options);
    if (!req.user) {
      res.json(({error: 'you must be logged in to do that'}));
      return;
    }
    console.log('user:', req.user);
    console.log('new poll:', req.body);
    createPoll(req.user._id, pollName, canAddNewOptions, options, (err, poll) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/delete', isLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    let userId = req.user._id;
    deletePoll(userId, pollId, (err, msg) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json({success: msg});
    });
  });

  app.post('/api/polls/:pollId/:optionId', (req, res) => {
    let pollId = req.params.pollId;
    let optionId = req.params.optionId;
    if (req.isAuthenticated()) {
      incrementOption(pollId, optionId, req.user._id, (err, poll) => {
        if (err) {
          res.json({error: err.toString()});
          return;
        }
        res.json(poll);
      });
      return;
    }
    let ip = req.ip;
    if (req.ips & req.ips.length > 0) {
      ip = req.ips[0];
    }
    incrementOption(pollId, optionId, ip, (err, poll) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json(poll);
    });
  });
  
  app.post('/api/polls/:pollId/new', (req, res) => {
    let pollId = req.params.pollId;
    let body = req.body;
    if ('string' === typeof body) body = JSON.parse(body);
    let newOption = body.option || null;
    if (newOption === null) {
      res.json({error: 'no new option specified'});
      return;
    }
    let optionColor = body.optionColor || null;
    addOptionToPoll(pollId, newOption, optionColor, (err, poll) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/:optionId/delete', isLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    let optionId = req.params.optionId;
    if (req.user.createdPolls.indexOf(pollId) < 0 ) {
      res.json({error: `can't delete an option from a poll you don't own`});
      return;
    }
    removeOptionFromPoll(pollId, optionId, (err, poll) => {
      if (err) {
        res.json({error: err});
        return;
      }
      res.json(poll);
    });
  });

  app.post('/api/polls/:pollId/toggleFavorite', isLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    if (!req.user) {
      res.json({error: 'something went wrong'});
      return;
    }
    if (req.user.savedPolls.indexOf(pollId) < 0) {
      addFavoritePoll(req.user._id, pollId, (err, poll) => {
        if (err) {
          res.json({error: err.toString()});
          return;
        }
        res.json(poll);
      });
      return;
    }
    removeFavoritePoll(req.user._id, pollId, (err, poll) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json(poll);
    });
  });
};
