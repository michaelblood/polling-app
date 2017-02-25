import React, { PropTypes } from 'react';

const PollsContainer = React.createClass({
  getInitialState() {
    return {
      polls: []
    }
  },

  sort(filter) {

  },

  renderPolls() {

  },
  
  render() {
    return !this.props.params.filter ? <div>Polls</div> : <div>{this.props.params.filter} Polls</div>
  }
});

export default PollsContainer;
