const GithubStrategy = require('passport-github').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const config = !!process.env.GITHUB_CLIENT_ID ? null : require('../config.js');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET} = process.env.GITHUB_CLIENT_ID ? process.env : config;
const { TWITTER_CONSUMER_ID, TWITTER_CONSUMER_SECRET, CALLBACK_URL } = process.env.CONSUMER_ID ? process.env : config;
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
            displayName: profile.displayName,
            avatar: profile.photos ? profile.photos[0].value : null
          },
          loginMethod: 'github',
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

  passport.use(new TwitterStrategy({
      consumerKey: TWITTER_CONSUMER_ID,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: CALLBACK_URL
    },
    (acessToken, refreshToken, profile, cb) => {
      Users.findOne({ 'twitter.id': profile.id }, (err, user) => {
        if (err) {
          cb(err);
          return;
        }
        if (user) {
          cb(null, user);
          return;
        }
        Users.create({
          twitter: {
            id: profile.id,
            username: profile.username,
            displayName: profile.displayName,
            avatar: profile.photos ? profile.photos[0].value : null
          },
          loginMethod: 'twitter',
          createdPolls: [],
          savedPolls: []
        }, (err, userdoc) => {
          if (err) {
            cb(err);
            return;
          }
          cb(null, userdoc);
          return;
        });
      });
    }  
  ));
};
