import React, { PropTypes } from 'react';

import AlertPopup from '../common/alert';

const PollInfo = React.createClass({
  
  getInitialState() {
    return {
      poll: null,
      fetching: false
    };
  },

  componentDidMount() {
    if (this.props.params.id) {
      // fetch (id)
      // setState(poll: poll)
      return;
    }
    // fetch random
    // setState(poll: poll)
  },

  render() {
    if (this.state.fetching) {
      return (
        <div className="loading-screen">
          <div className="loading-spinner" />
        </div>
      );
    }
    return (
      <div className="container">
        {!!this.state.alert && <div className="poll-info"></div> }
      </div>
    );
  }
});

export default PollInfo;