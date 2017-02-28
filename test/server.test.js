/* eslint-env node, mocha */
global.Promise = require('bluebird');
const expect = require('chai').expect;
const supertest = require('supertest');

const app = require('../app/server.js');
const request = supertest(app);
const agent = supertest.agent(app);

const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

beforeEach(function(done) {
  if (mongoose.connection.db) return done();
  mongoose.connect('mongodb://localhost:27017/test-db', err => {
    if (err) {
      console.log('failed to connect to mongoDB');
      return;
    }
    done();
  });
});

describe('\nwebserver', function() {

  describe('unauthenticated actions', function() {

    describe('/api/amiloggedin', function() {
      it('should return an error', function(done) {
        request.get('/api/amiloggedin')
          .expect((res) => {
            expect(res.body).to.have.property('error')
          }).end(done);
      });
    });

    describe('/api/polls/favorites', function() {
      it('should return an error', function(done) {
        request.get('/api/polls/favorites')
          .expect((res) => {
            expect(res.body).to.have.property('error');
          }).end(done);
      });
    });

    describe('/api/polls/created', function() {
      it('should return an error', function(done) {
        request.get('/api/polls/created')
          .expect((res) => {
            expect(res.body).to.have.property('error').that.equals('not authenticated');
          }).end(done);
      });
    });

    describe('/api/polls/created', function() {
      it('should return an error when not given a paramter', function(done) {
        request.post('/api/polls/new')
          .send('pollName=thing')
          .expect(res => {
            expect(res.body).to.have.property('error');
          }).end(done);
      });
      it('should return an error, even with all parameters', function(done) {
        request.post('/api/polls/new')
          .send('pollName=thing')
          .send('options=[thing1, thing2]')
          .send('canAddNewOptions=false')
          .expect(res => {
            expect(res.body).to.have.property('error');
          }).end(done);
      });
    });

    

  });
  describe('authentication-agnostic actions', function() {

    describe.skip('/api/polls/random', function() {

    });

    describe.skip('/api/poll/:id', function() {

    });

    describe('/api/polls/all', function() {
      it('should return an array of polls', function(done) {
        request.get('/api/polls/all')
          .expect((res) => {
            expect(res.body.polls).to.have.lengthOf(0);
            expect(res.body.nextPageStart).to.equal(-1);
          }).end(done);
      });
    });

    
  });

  describe.skip('authenticated actions', function() {
    describe('/api/amiloggedin', function() {
      it('should do something', function(done) {
        agent.post('/api/amiloggedin')
          .send({ _id: '58b472427a9c6919a43c1a00'})
          .end((err, res) => {
            console.log(res.body);
            done();
          });
      });
    });
  });

});