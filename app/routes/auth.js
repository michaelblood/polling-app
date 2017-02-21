const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login?message=You need to log in to do that');
};

module.exports = {
  isLoggedIn
};
