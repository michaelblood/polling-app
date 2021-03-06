/* eslint-env node, mocha */
const assert = require('assert');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const expect = require('chai').expect;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/test-db', (err) => {
  if (err) {
    console.log('failed to connect to mongoDB. exiting...');
    process.exit(1);
  }
});

const Users = require('../app/models/user');
const Polls = require('../app/models/poll');
const {
  getPolls,
  createPoll,
  addOptionToPoll,
  addFavoritePoll,
  removeOptionFromPoll,
  deletePoll,
  incrementOption,
  removeFavoritePoll,
  getFavoritePolls,
  getCreatedPolls,
  createUser
} = require('../app/controllers');

describe('Controller tests', function() {
  afterEach(function(done) {
    Users.remove({}, () => {
      Polls.remove({}, done);
    });
  });

  describe('\npoll controllers', function() {
    describe('deletePoll', function() {
      it(`should delete a poll if the authorId matches the poll's authorId`, function(done){
        createUser('testing', (err, user) => {
          createPoll(user._id, 'testPoll', true, ['option1', 'option2'], (err, poll) => {
            createPoll(user._id, 'testPoll2', true, ['option3', 'option4'], (err, unused) => {
              deletePoll(user._id, poll._id, (err, success) => {
                if (err) {
                  console.log(err);
                  assert(false);
                }
                assert('Deleted successfully' === success);
                done();
              });
            });
          });
        });
      });

      it(`should not delete a poll if the authorId does NOT match the poll's authorId`, function(done) {
        createUser('testing', (err, user) => {
          createUser('alsoTesting', (err, otherUser) => {
            createPoll(user._id, 'testPoll2', true, ['option1', 'option2'], (err, poll) => {
              deletePoll(otherUser._id, poll._id, (err, success) => {
                if (err) {
                  assert.equal(`You don't own that poll`, err.toString())
                  done();
                  return;
                }
                assert.notEqual(`Deleted successfully`, success);
                done();
              });
            });
          });
        });
      });
    });
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

    describe('incrementOption', function() {
      it('should increment a poll and return that updated polll', function(done) {
        createUser('testing', (err, user) => {
          createPoll(user._id, 'testing', true, ['option1', 'option2', 'option3'], (err, poll) => {
            incrementOption(poll._id, poll.options[1]._id, 'testip', (err) => {
              if (err) {
                console.log(err);
                assert(false);
              }
              done();
            });
          });
        });
      });
    });
    
    describe('getPolls', function() {
      beforeEach(function(done) {
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

      it('should return an empty array if at the end of the list', function(done) {
        getPolls(3, (err, docs) => {
          if (err) {
            console.log(err);
            assert(false);
            done();
          }
          assert(docs.length === 0);
          done();
        });
      });
    }); // end getPolls

    describe('addOptionToPoll', function() {
      it('should add an option to a poll', function(done) {
        createUser('Mocha', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', true,['option1', 'option2'], (err, doc) => {
            assert(doc.options.length === 2);
            addOptionToPoll(doc._id, 'option', '#FFF', (err, updated) => {
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

      it('should not add an option to a poll that will not allow it', function(done) {
        createUser('Mocha', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', false,['option1', 'option2'], (err, doc) => {
            addOptionToPoll(doc._id, 'option3', '#FFF', (err, updated) => {
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

    describe('removeOptionFromPoll', function() {
      it('should remove an option from a poll', function(done) {
        createUser('MochaUser', (err, user) => {
          createPoll(user._id, 'pollName', true, ['option1', 'option2', 'option3'], (err, poll) => {
            removeOptionFromPoll(poll._id, poll.options[2]._id, (err, poll) => {
              if (err) {
                console.log(err);
                done();
              }
              assert(poll.options.length === 2);
              done();
            });
          });
        });
      });

      it('should not remove an option, if there would be fewer than 2 left', function(done) {
        createUser('MochaUser', (err, user) => {
          createPoll(user._id, 'pollName', true, ['option1', 'option2', 'option3'], (err, poll) => {
            removeOptionFromPoll(poll._id, poll.options[1]._id, (err, poll) => {
              if (err) {
                console.log(err);
                assert(false);
                done();
              }
              assert(poll.options.length === 2);
              removeOptionFromPoll(poll._id, poll.options[1]._id, (err, poll) => {
                assert(err);
                assert(!poll);
                done();
              })
            });
          });
        });
      });
    });


  }); // end 'poll controllers' tests

  describe('\nuser controllers', function() {
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
            addFavoritePoll(id, doc._id, (err, updatedUser) => {
              assert(updatedUser.savedPolls.length === 1);
              done();
            });
          });
        });
      });
    });

    describe('removeFavoritePoll', function() {
      it('should remove a favorite poll from a user', function(done) {
        createUser('mochalove', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', true, ['option1', 'option2'], (err, doc) => {
            addFavoritePoll(id, doc._id, (err, doc) => {
              expect(doc.savedPolls).to.have.lengthOf(1);
              removeFavoritePoll(id, doc._id, (err, u) => {
                expect(err).to.not.exist;
                expect(u).to.exist;
                expect(u.savedPolls).to.have.lengthOf(0);
                done();
              });
            })
          }); 
        })
      });
    });

    describe('getFavoritePolls', function() {
      it(`should return an array of user's favorite polls`, function(done) {
        createUser('mochalove', (err, user) => {
          let id = user._id;
          createPoll(id, 'test-poll', true, ['option1', 'option2'], (err, doc) => {
            addFavoritePoll(id, doc._id, (err, doc) => {
              getFavoritePolls(id, 0, (err, arr, next) => {
                expect(err).to.not.exist;
                expect(arr).to.have.lengthOf(1);
                expect(next).to.equal(-1);
                done();
              });
            })
          }); 
        })
      });
    });

    describe('getCreatedPolls', function() {
      it(`should return an array of user's created polls`, function(done) {
        createUser('mochalove', (err, user) => {
          let id = user._id;
          expect(user.createdPolls).to.have.lengthOf(0);
          createPoll(id, 'test-poll', true, ['option1', 'option2'], (err, doc) => {
            getCreatedPolls(id, 0, (err, arr, next) => {
              expect(err).to.not.exist;
              expect(arr).to.have.lengthOf(1);
              expect(next).to.equal(-1);
              done();
            });
          }); 
        })
      });
    });
  }); // end 'user controllers' tests

}); // 'controller tests'
