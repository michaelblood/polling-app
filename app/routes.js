const handlers = require('handlers');

modules.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.redirect('/polls');
  });

  app.get('/login', (req, res) => {

  });

  app.get('/logout', (req, res) => {

  });

  app.get('/polls/new', (req, res) => {

  });

  app.get('/polls/:id', (req, res) => {

  });

  app.get('/polls', (req, res) => {
    let offset = req.query.offset || 0;

  });

  app.post('/polls/:id', (req, res) => {

  });
  app.post('/polls/:id/:choice', (req, res) => {

  });
};
