module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.redirect('/polls');
  });

  app.get('/login', (req, res) => {
    let message = req.query.message;
    res.end('message');
  });

  app.get('/polls/new', (req, res) => {
    res.send(`
      <form method="post" enctype="application/x-www-form-urlencoded" action="/api/polls/new">
        <input type="text" name="pollName" placeholder="pollName">
        <input type="text" name="option1" placeholder="option">
        <input type="text" name="option2" placeholder="option">
        <input type="submit" value="Create poll">
      </form>
    `)
  });

  app.get('/polls', (req, res) => {
    res.end('Hello world', req.isLoggedIn);
  });

  app.get('/auth/github/callback', passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login?message=Authentication failed',
    failureFlash: true
  }));

  app.get('/auth/github', passport.authenticate('github'));

  app.post('/polls/:id', (req, res) => {

  });

  app.post('/polls/:id/:choice', (req, res) => {

  });
};
