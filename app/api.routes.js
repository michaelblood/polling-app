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

  app.post('/api/polls/new', (req, res) => {
    // let { pollName, option1, option2 } = req.body;
    let { pollName, options } = req.body; // options should be an array
    //redirect to new poll id
    res.redirect('/polls');
  });

  app.post('/api/user/new', (req, res) => {

  });
};
