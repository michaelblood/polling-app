import React, { PropTypes } from 'react';

const PollInfo = React.createClass({
  
  render() {
    return <div>Poll info for poll {this.props.params.id}</div>;
  }
});

export default PollInfo;
