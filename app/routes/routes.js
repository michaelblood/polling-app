const { isLoggedIn } = require('./auth');
const path = require('path');

module.exports = (app, passport) => {

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
  });
};
