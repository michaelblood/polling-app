const { isLoggedIn } = require('./auth');

module.exports = (app, passport) => {

  // app.get('/polls', (req, res) => {
  //   if (req.isAuthenticated()) {
  //     res.end('<h1>hello ' + req.user.github.username + '</h1><br><a href="/logout" role="button">Logout</a><br><a href="/">New poll</a>');
  //     return;
  //   }
  //   res.end('<a href="/login" role="button">Login</a>')
  // });

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/polls',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/polls',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })
};
