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
    successRedirect: '/debug',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/debug',
    failureRedirect: '/login',
    failureFlash: true
  }));
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/debug', (req, res) => {
    console.log('-----------------------');
    console.log('just got back from oauth:');
    console.log('session:', req.session);
    console.log('user:', req.user);
    console.log('-----------------------');
    if (req.user) {
      console.log(req.user);
    } else {
      console.log('no user');
    }
    res.redirect('/');
  });
  app.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
