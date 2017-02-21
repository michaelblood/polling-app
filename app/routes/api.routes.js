const {
  getPolls,
  createPoll,
  addOptionToPoll,
  removeOptionFromPoll,
  addFavoritePoll,
  createUser,
  deletePoll,
  incrementOption,
  removeFavoritePoll
} = require('../controllers');
const { isLoggedIn } = require('./auth');

module.exports = (app, passport) => {

  app.get('/api/polls', (req, res) => {
    let offset = req.query.offset || 0;
    getPolls(offset, (err, polls) => {
      if (err) {
        res.json({error: err.toString()});
        return;
      }
      res.json({ polls: polls, nextPageStart: offset + polls.length });
    });
  });

  app.post('/api/polls/new', isLoggedIn, (req, res) => {
    //let { pollName, options, canAdd } = req.body; // options should be an array
    //redirect to new poll id
    if ('string' == typeof req.body) req.body = JSON.parse(req.body);
    console.log(req.body);
    let { pollname, option1, option2 } = req.body;
    let options = [option1, option2]; 
    createPoll(req.user._id, pollName, canAdd, options, (err, poll) => {
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
      res.json({sucess: msg});
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
    if (req.ips & reg.ips.length > 0) {
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

  app.post('/api/polls/:pollId/:optionId/delete', isLoggedIn, (req, res) => {
    let pollId = req.params.pollId;
    let optionId = req.params.optionId;
    // todo
  });

  app.post('/api/polls/:pollId/toggleFavorite', isLoggedIn, (req, res) => {
    let pollId = req.params.pollId;

  });
};
