import React from 'react';

import PollsContainer from './pollsContainer';

const PollsContainerWrapper = React.createClass({
  render() {
    return (
      <PollsContainer params={{filter: this.props.params.filter}} />
    );
  }
});

export default PollsContainerWrapper;