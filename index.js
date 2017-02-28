const app = require('./app/server.js');
const mongoose = require('mongoose');
Promise = require('bluebird');

const options = {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
};


const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/poll-app';
mongoose.Promise = Promise;
mongoose.connect(uri, options);
mongoose.connection.on('error', () => {
  console.log('connection to mlab failed');
  process.exit(1); 
});

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});