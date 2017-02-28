import React from 'react';
import { Link } from 'react-router';

import PollOptions from './pollOptions';
import PollChart from './pollChart';
import { Modal, AlertPopup } from '../common'

const PollInfo = React.createClass({
  
  getInitialState() {
    return {
      poll: null,
      fetching: false,
      alert: null,
      modal: null,
      posting: false
    };
  },

  componentDidMount() {
    const self = this;
    if (this.props.params.id) {
      self.setState({ fetching: true });
      fetch(`/api/poll/${this.props.params.id}`, { credentials: 'same-origin' })
        .then(response => response.json())
        .then(json => {
          if (json.error) {
            self.setState({
              alert: {
                type: 'danger',
                message: 'Something went wrong. Try again later.'
              },
              fetching: false
            });
            return;
          }
          self.setState({
            poll: json,
            fetching: false
          });
        }).catch(err => console.log(err));
      return;
    }
    // fetch random
    // setState(poll: poll)
  },

  handleOptionClick(id) {
    this.setState({ posting: true });
    let self = this;
    fetch(`/api/poll/${this.state.poll._id}/${id}`, {
      method: 'POST',
      credentials: 'same-origin'
    }).then(response => response.json())
      .then(json => {
        if (json.error) {
          self.setState({
            alert: {
              type: 'danger',
              message: `Either you've already voted, or you broke something. Either way, shame on you!`
            },
            posting: false
          });
          return;
        }
        self.setState({
          poll: json,
          posting: false
        });
      }).catch(err => console.log(err));
  },

  handleAddOption() {
    this.setState({
      modal: true
    });
  },
  
  destroyModal() {
    this.setState({
      modal: false
    });
  },

  dismissALert() {
    this.setState({
      alert: false,
    });
  },

  addNewOption(text) {
    const self = this;
    fetch(`/api/poll/${self.state.poll._id}/new`, {
      method: 'POST',
      body: JSON.stringify({ option: text }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    }).then(response => response.json())
      .then(json => {
        if (!json._id) {
          self.setState({
            alert: {
              type: 'danger',
              message: 'Something went wrong. Try again later.'
            }
          });
          return;
        }
        self.setState({
          poll: json,
          modal: false
        });
      }).catch(err => console.log(err));
  },

  dismissAlert() {
    this.setState({alert: null});
  },

  render() {
    if (this.state.fetching) {
      return (
        <div className="loading-screen">
          <div className="loading-spinner" />
        </div>
      );
    }
    let poll = this.state.poll;
    if (!poll) return (<h1>error</h1>);
    return (
      <div>
        {this.state.modal && <Modal onClick={this.addNewOption} destroy={this.destroyModal} />}
        <div className="jumbotron page-title text-center">
          <div className="container">
            <div className="h1">
              {!!poll ? poll.name : `Allan please add title.`}
            </div>
          </div>
        </div>
        <div className="container">
          {!!this.state.alert && <AlertPopup message={this.state.alert.message} type={this.state.alert.type} onClick={this.dismissAlert} />}
          <div className="row">
            <div className="col-md-2 hidden-xs hidden-sm">
              <Link role="button" className="btn btn-default btn-lg" to="/polls/all">
                Back to polls
              </Link>
            </div>
            {this.state.posting
              ? 
              <div className="col-md-4 col-xs-8">
                <div className="loading-spinner"></div>
              </div>
              :
              <PollOptions
                onClick={this.handleOptionClick}
                addNew={this.handleAddOption}
                options={poll.options}
                canAddNewOptions={poll.canAddNewOptions}
              />
            }
            <PollChart options={poll.options} />
          </div>
        </div>
      </div>
    );
  }
});

export default PollInfo;