const GithubStrategy = require('passport-github').Strategy;

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, CALLBACK_URL } = process.env.GITHUB_CLIENT_ID ? process.env : require('./config');
const Users = require('../app/models/user');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, cb) => {
    Users.findById(id, (err, user) => cb(err, user));
  });

  passport.use(new GithubStrategy({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET
    }, 
    (accessToken, refreshToken, profile, cb) => {
      Users.findOne({'github.id': profile.id}, (err, user) => {
        if (err) {
          cb(err);
          return;
        }
        if (user) {
          cb(null, user);
          return;
        }
        Users.create({
          github: {
            id: profile.id,
            username: profile.username,
            displayName: profile.displayName
          },
          createdPolls: [],
          savedPolls: []
        }, (err, doc) => {
          if (err) {
            cb(err);
            return;
          }
          cb(null, doc);
          return;
        });
      });
    }
  ));
};