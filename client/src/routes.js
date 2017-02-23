import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CreatePoll from './components/createPoll/createPoll';
import Login from './components/login';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/login" component={Login} />
    <Route path="/polls/new" component={CreatePoll} />
  </Route>
);