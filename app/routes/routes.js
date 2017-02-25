const { isLoggedIn } = require('./auth');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RouterContext } = require('react-router');

const routes = require('../../client/src/routes');

const renderPage = (html) => {
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8"> 
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
      <link rel="stylesheet" href="./index.css">
      <title>mb-polling</title>

    </head>
    <body>
      <div id=root>${html}</div>
      <script src="./bundle.js"></script>
    </body>
  </html>`
};

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
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      if (redirect) {
        res.redirect(redirect.pathname + redirect.search);
        return;
      }
      const html = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(html));
    });
  });
};
