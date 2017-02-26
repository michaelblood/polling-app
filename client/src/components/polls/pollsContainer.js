import React, { PropTypes } from 'react';

import MiniPoll from '../common/miniPoll';
import MorePollsButton from './morePollsButton';
import AlertPopup from '../common/alert';

const PollsContainer = React.createClass({
  contextTypes: {
    router: PropTypes.object
  },

  getInitialState() {
    return {
      fetching: false,
      polls: {
        all: [],
        favorites: [],
        created: []
      },
      nextPage: {
        all: 0,
        favorites: 0,
        created: 0
      }
    }
  },

  componentDidMount() {
    this.fetch();
  },

  fetch() {
    let filter = this.props.params.filter;
    let nextPage = this.state.nextPage[filter];
    if (nextPage === -1) alert('no more polls');
    this.setState({ fetching: true });
    let self = this;
    fetch(`/api/polls/${filter}?offset=${nextPage}`)
      .then(response => response.json())
      .then(json => {
        if (json.error) {
          self.setState({
            alert: {
              type: 'danger',
              message: 'Something went wrong fetching polls. Try again later.'
            },
            fetching: false
          })
        }
        let polls = {
          all: self.state.polls.all,
          favorites: self.state.polls.favorites,
          created: self.state.polls.created
        }
        let nextPage = {
          all: self.state.nextPage.all,
          favorites: self.state.nextPage.favorites,
          created: self.state.nextPage.created
        };
        nextPage[filter] = json.nextPageStart;
        let newPolls = polls[filter].concat(json.polls);
        polls[filter] = newPolls;
        self.setState({
          fetching: false,
          polls: polls,
          nextPage: nextPage
        });
      }).catch(err => console.log(err));
  },
  
  pageTitle() {
    switch(this.props.params.filter) {
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
    let polls = this.state.polls[this.props.params.filter];
    if (polls.length < 1) return null;
    let renderedPolls = [];
    for (let i = 0; i < polls.length; i++) {
      let poll = polls[i];
      if (poll){
        renderedPolls.push(
          <MiniPoll key={poll._id} poll={poll} onClick={this.handlePollClick} />
        );
      }
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
            {(this.state.nextPage[this.props.params.filter] > -1)
              ? <MorePollsButton loading={this.state.fetching} onClick={this.fetch} />
              : <MorePollsButton done />}
          </div>
        </div>
      </div>
    );

  }
});

export default PollsContainer;
