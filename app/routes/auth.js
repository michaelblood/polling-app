const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
    return;
  }
  res.redirect('/login');
};

const apiIsLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
    return;
  }
  res.json({error: 'not authenticated'});
};

module.exports = {
  isLoggedIn,
  apiIsLoggedIn
};
