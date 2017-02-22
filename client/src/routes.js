import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CreatePoll from './components/createPoll/createPoll';
import AddOption from './components/createPoll/addOption';
module.exports = (
  <Route path="/*" component={CreatePoll} />
);