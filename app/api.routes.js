const {
  getPolls,
  createPoll,
  addOptionToPoll,
  removeOptionFromPoll,
  addFavoritePoll,
  createUser
} = require('./controllers');

module.exports = (app, passport) => {
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
    let { pollName, option1, option2 } = req.body;
    
    //redirect to new poll id
    res.redirect('/polls');
  });

  app.post('/api/user/new', (req, res) => {

  });
};
