import React, { PropTypes } from 'react';

const MorePollsButton = React.createClass({
  render() {
    if (this.props.loading) {
      return (
        <div
          className="col-xs-12"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <div className="loading-spinner"></div>
        </div>
      );
    }
    if (this.props.done) {
      return (
        <div
          className="col-xs-12"
          style={{display: 'flex', justifyContent: 'center'}}
        >
          <h3>No more polls :(</h3>
        </div>
      )
    }
    return (
      <div
        onClick={this.props.onClick}
        className="col-xs-12 more-polls"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <h3>More polls...</h3>
      </div>
    );
  }
});

MorePollsButton.propTypes = {
  loading: PropTypes.bool,
  done: PropTypes.bool,
  onClick: PropTypes.func
};

export default MorePollsButton;