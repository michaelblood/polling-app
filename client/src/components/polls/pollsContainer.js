import React, { PropTypes } from 'react';

import MiniPoll from '../common/miniPoll';
import MorePollsButton from './morePollsButton';

const PollsContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object
  },

  getInitialState() {
    return {
      fetching: false,
      polls: [],
      nextPage: 0,
      filter: 'all'
    }
  },

  componentDidMount() {
    this.setState({ filter: this.props.params.filter }, () => {
      this.fetch();
    });
  },

  fetch() {
    if (this.state.nextPage === -1) alert('no more polls');
    this.setState({ fetching: true });
    fetch(`/api/polls?offset=${this.state.nextPage}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          fetching: false,
          polls: this.state.polls.concat(json.polls),
          nextPage: json.nextPageStart
        });
      }).catch(err => console.log(err));
  },
  
  pageTitle() {
    switch(this.state.filter) {
      case 'all':
        return 'All Polls';
      case 'created':
        return 'My Polls';
      case 'favorites':
        return 'Saved Polls'
      default:
        return 'Polls'
    }
  },

  handlePollClick(id) {
    this.context.router.push(`/poll/${id}`);
  },

  renderPolls() {
    let polls = this.state.polls;
    let renderedPolls = [];
    for (let i = 0; i < polls.length; i++) {
      let poll = polls[i];
      renderedPolls.push(
        <MiniPoll key={poll._id} poll={poll} onClick={this.handlePollClick} />
      );
    }
    return renderedPolls;
  },
  
  render() {
    return (
      <div>
        <div className="jumbotron   text-center page-title">
          <h1>{this.pageTitle()}</h1>
          <h3></h3>
        </div>
        <div className="container">
          <div className="row poll-list">
            {this.renderPolls()}
            {(this.state.nextPage > -1)
              ? <MorePollsButton loading={this.state.fetching} onClick={this.fetch} />
              : <MorePollsButton done />}
          </div>
        </div>
      </div>
    );

  }
});

export default PollsContainer;
