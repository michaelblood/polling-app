const {
  getPolls,
  createPoll,
  addOptionToPoll,
  removeOptionFromPoll,
  addFavoritePoll,
  createUser
} = require('./controllers');

module.exports = (app, passport) => {
  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
      return;
    }
    req.redirect('/login?message=You need to log in to do that');
  }

  app.get('/api/polls', (req, res) => {
    let offset = req.query.offset || 0;
    getPolls(offset, (err, polls) => {
      if (err) {
        res.json(err);
        return;
      }
      res.json({ polls: polls, nextPageStart: offset + polls.length });
    });
  });

  app.post('/api/polls/new', isLoggedIn, (req, res) => {
    let { pollName, options, canAdd } = req.body; // options should be an array
    //redirect to new poll id
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
    

  });
};
