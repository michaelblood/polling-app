import React, { PropTypes } from 'react';

const PollsContainer = React.createClass({

  render() {
    return this.props.params.filter ? <div>Polls</div> : <div>{this.props.params.filter} Polls</div>
  }
});

export default PollsContainer;
