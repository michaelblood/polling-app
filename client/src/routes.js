import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CreatePoll from './components/createPoll';
import Login from './components/login';
import PollInfo from './components/pollInfo';
import NotFound from './components/notFound';
import Home from './components/home';
import PollsContainer from './components/polls';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/polls/new" component={CreatePoll} />
    <Route path="/polls/(:filter)" component={PollsContainer} />
    <Route path="/poll/random" component={PollInfo} />
    <Route path="/poll/:id" component={PollInfo} />
    <Route path="/*" component={NotFound} />
  </Route>
);