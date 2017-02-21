module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.redirect('/polls');
  });

  app.get('/login', (req, res) => {
    let message = req.query.message;
    res.end('<a href="/auth/github" role="button">Login with Github</a><br><br>' + (message || ''));
  });

  app.get('/polls/new', (req, res) => {
    res.end(`
      <form method="post" enctype="application/x-www-form-urlencoded" action="/api/polls/new">
        <input type="text" name="pollName" placeholder="pollName">
        <input type="text" name="option1" placeholder="option">
        <input type="text" name="option2" placeholder="option">
        <input type="submit" value="Create poll">
      </form>
    `)
  });

  app.get('/polls', (req, res) => {
    if (req.isAuthenticated()) {
      res.end('<h1>hello ' + req.user.github.username + '</h1><br><a href="/logout" role="button">Logout</a>');
      return;
    }
    res.end('<a href="/login" role="button">Login</a>')
  });

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/polls',
    failureRedirect: '/login?message=Authentication failed',
    failureFlash: true
  }));
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/polls',
    failureRedirect: '/login?message=Authentication failed',
    failureFlash: true
  }));
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login?message=Logged out successfully');
  })

  app.post('/polls/:id', (req, res) => {

  });

  app.post('/polls/:id/:choice', (req, res) => {

  });
};
