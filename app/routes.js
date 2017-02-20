module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.redirect('/polls');
  });

  app.get('/login', (req, res) => {

  });

  app.get('/logout', (req, res) => {

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

  app.get('/polls/:id', (req, res) => {

  });

  app.get('/polls', (req, res) => {
    res.end('Hello world');
  });

  app.get('/polls/callback', (req, res) => {

  })

  app.post('/polls/:id', (req, res) => {

  });
  app.post('/polls/:id/:choice', (req, res) => {

  });
};
