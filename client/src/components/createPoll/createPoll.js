// Create Poll page - /polls/new

import React, { PropTypes } from 'react';

import AddOption from './addOption';
import AlertPopup from '../common/alert';

const CreatePoll = React.createClass({
  contextTypes: {
    router: PropTypes.object
  },

  defaultColor() {
    let color = `#`;
    while (color.length < 7) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
  },

  getInitialState() {
    return {
      numOptions: 2,
      nextIndex: 2,
      options: {
        "0": {
          text: '',
          color: this.defaultColor()
        },
        "1": {
          text: '',
          color: this.defaultColor()
        }
      },
      canAddNewOptions: true,
      pollName: '',
      alert: null
    };
  },

  handleChange(index, type, setting) {
    this.setState((previous) => {
      previous.options[index][type] = setting;
      return previous;
    });
  },

  handleNameChange(name) {
    this.setState({ pollName: name});
  },

  dismissAlert() {
    this.setState({ alert: null });
  },

  handleDelete(index) {
    if (this.state.numOptions < 3) {
      this.setState({
        alert: {
          type: 'warning',
          message: 'Polls must have at least 2 options!'
        }
      });
      return;
    }
    this.setState((previous) => {
      previous.options[index] = null;
      previous.numOptions--;
      return previous;
    });
  },

  addAnotherOption() {
    this.setState((previous) => {
      previous.options[previous.nextIndex] = {
        color: this.defaultColor(),
        text: ''
      }
      previous.nextIndex++;
      previous.numOptions++;
      return previous;
    });
  },

  toggleCanAdd() {
    this.setState({
      canAddNewOptions: !this.state.canAddNewOptions
    });
  },

  handleSubmit() {
    let options = this.state;

    if (options.pollName === '') {
      this.setState({
        alert: {
          type: 'warning',
          message: 'Please specify a poll name!'
        }
      });
      return;
    }

    for (let i = 0; i < options.nextIndex; i++) {
      let option = options.options[i.toString()];
      if (option) {
        if (option.text === '') {
          this.setState({
            alert: {
              type: 'warning',
              message: `Options can't be empty!`
            }
          });
          return;
        }
      }
    }
    let self = this;
    fetch('/api/polls/new', {
      method: 'POST',
      body: JSON.stringify(options),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    }).then((response) => {
      if ('object' === typeof response) {
        return response;
      }
      return response.json();
    }).then(json => {
      if (!json._id) {
        self.setState({
          alert: {
            type: 'danger',
            message: 'Something went wrong. Try again later.'
          }
        });
        return;
      }
      self.context.router.push(`/poll/${json._id}`);
    }).catch((err) => console.log(err));
  },

  renderOptions() {
    let options = [];
    for (let index = 0; index < this.state.nextIndex; index++) {
      let option = this.state.options[index];
      if (!option) options.push(null);
      else options.push(
        <AddOption
          key={index}
          color={option.color}
          index={index}
          onChange={this.handleChange}
          onClick={this.handleDelete}
        />
      );
    }
    return options;
  },

  render() {
    return (
      <div className="container">
        {!!this.state.alert && <AlertPopup message={this.state.alert.message} type={this.state.alert.type} onClick={this.dismissAlert} />}
        <div className="poll-view">
          <h3 className="text-center" htmlFor="poll-name">Poll name:</h3>{' '}
          <div className="row">
            <div className=" col-xs-12 col-md-6 col-md-offset-3">
              <input className="input-lg input-block-level form-control" type="text" onChange={(el) => this.handleNameChange(el.target.value)} placeholder="Poll name" />
            </div>
          </div>
          <div className="option-field-container">
            <hr />
            <div className="row">
              {this.renderOptions()}
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" onClick={this.addAnotherOption}>
                <div className="panel panel-info add-option-btn">
                  <div className="panel-heading text-center">
                    <h3>Add option</h3>
                  </div>
                  <div className="panel-body text-center">
                    <div className="jumbotron" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                      <h1><span className="glyphicon glyphicon-plus"></span></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="checkbox col-sm-3 col-sm-offset-2">
                <label>
                  <input defaultChecked="checked" onClick={this.toggleCanAdd} value={this.state.canAdd ? 'on' : 'off'} type="checkbox" />
                  Allow voters to add custom options
                </label>
              </div>
              <div id="submit-new-poll" onClick={this.handleSubmit} className="col-sm-5 form-inline text-center add-option">
                <label><span className="glyphicon glyphicon-ok"/> Submit new poll</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default CreatePoll;
