
const assert = require('assert');
const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/test-db');

const Users = require('../app/models/user');
const Polls = require('../app/models/poll');
const { getPolls, createPoll, addFavoritePoll, addOptionToPoll, createUser } = require('../app/handlers');

describe('Server tests', function() {
  after(function(done) {
    Users.remove({}, () => {
      Polls.remove({}, done);
    });
  });
  afterEach(function(done) {
    Users.remove({}, () => {
      Polls.remove({}, done);
    });
  });

  describe('\npoll handlers', function() {
    describe('createPoll', function() {
      it('should return a document', function(done) {
        createUser('MochaUser', (err, user) => {
          createPoll(user._id, 'test-poll', true, ['option1', 'option2'], (err, doc) => {
            if (err){
              console.log(err);
              assert(false);
              done();
            }
            assert(doc._id);
            done();
          });
        });
        
      });
      it(`should add a poll id to the user's created polls`, function(done) {
        createUser('MochaUser', (err, user) => {
          createPoll(user._id, 'test-poll', true, ['option1', 'option2'], (err, doc) => {
            if (err){
              console.log(err);
              assert(false);
              done();
            }
            Users.findById(user._id, '', {}, (err, doc) => {
              if (err) {
                console.log(err);
                assert(false);
                done();
              }
              assert(doc.createdPolls.length === 1);
              done();
            });
          });
        });
      });

    });
    
    describe('getPolls', function() {
      beforeEach(function(done) {
        // TODO: @github
        createUser('MochaUser', (err, doc) => {
          let id = doc._id;
          createPoll(id, 'test-poll', true,['option1', 'option2'], () => {
            createPoll(id, 'test-poll2', true, ['option3', 'option4'], () => {
              createPoll(id, 'test-poll3', true, ['option5', 'option6'], () => {
                Polls.find({}, (err, docs) => {
                  // console.log(docs);
                  done();
                });  
              });
            });
          });
          // Promise.all(
          //   [createPoll(id, 'test-poll', true,['option1', 'option2'], () => {

          //   }),
          //   createPoll(id, 'test-poll2', true, ['option3', 'option4'], () => {

          //   }),
          //   createPoll(id, 'test-poll3', true, ['option5', 'option6'], () => {
                  
          //   })]
          // ).then(() => {
          //   done()
          // });
        });
      });
      it('should return a list of polls, or an empty list if no polls are present', function(done) {
        getPolls(0, (err, docs) => {
          if (err) {
            console.log(err);
            assert(false);
            done();
          }
          assert(docs.length === 3);
          done();
        });
      });
      it('should skip 1 result, when an offset is given', function(done) {
        getPolls(1, (err, docs) => {
          if (err) {
            console.log(err);
            assert(false);
            done();
          }
          assert(docs.length === 2);
          done();
        });
      });
    });
    describe('addOptionToPoll', function() {
      it('should add an option to a poll', function(done) {
        createUser('Mocha', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', true,['option1', 'option2'], (err, doc) => {
            assert(doc.options.length === 2);
            addOptionToPoll(doc._id, 'option', (err, updated) => {
              if (err) {
                console.log(err);
                assert(false);
                done();
              }
              assert(updated.options.length === 3);
              done();
            });
          });
        });
      });
      it('should not add an option to a poll that will not allow it', function() {
        it('should add an option to a poll', function(done) {
        createUser('Mocha', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', false,['option1', 'option2'], (err, doc) => {
            addOptionToPoll(doc._id, {option: 'option3'}, (err, updated) => {
              if (err) {
                console.log(err);
                assert(false);
                done();
              }
              assert(updated.options.length === 2);
              done();
            });
          });
        });
      });
      });
    });


  }); // end 'poll handlers' tests

  describe('\nuser handlers', function() {
    // TODO: @github
    describe('createUser', function() {
      it('should create a user and return its id', function(done) {
        createUser('Mocha', (err, doc) => {
          if (err) {
            console.log(err);
            assert(false);
            done();
          }
          assert(doc._id);
          done();
        });
      });
      it('should show 0 created polls', function(done) {
        createUser('Mocha', (err, doc) => {
          if (err) {
            console.log(err);
            assert(false);
            done();
          }
          assert(doc.createdPolls.length === 0);
          done();
        });
      });
    });

    describe('addFavoritePoll', function() {
      it('should add the requested poll to a favorites list', function(done) {

        createUser('Mocha', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', true,['option1', 'option2'], (err, doc) => {
            assert(user.savedPolls.length === 0);
            addFavoritePoll(id, doc._id, doc.name, (err, updatedUser) => {
              assert(updatedUser.savedPolls.length === 1);
              done();
            });
          });
        });
      });
    });

  }); // end 'user handlers' tests

}); // 'server tests'
