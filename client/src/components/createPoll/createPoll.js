// Create Poll page - /polls/new

import React, { PropTypes } from 'react';
import throttle from 'lodash/throttle';

import AddOption from './addOption';

const CreatePoll = React.createClass({

  defaultColor() {
    let r = Math.floor(Math.random() * 256).toString(16);
    let g = Math.floor(Math.random() * 256).toString(16);
    let b = Math.floor(Math.random() * 256).toString(16);
    return `#${r}${g}${b}`;
  },

  getInitialState() {
    this.handleChange = throttle(this.handleChange, 500);
    this.handleNameChange = throttle(this.handleNameChange, 500);

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
      pollName: ''
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

  handleDelete(index) {
    if (this.state.numOptions < 3) {
      alert('Polls must have at least 2 options! We want people to have a choice!');
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

  toggleCanAdd(el) {
    this.setState({
      canAddNewOptions: !this.state.canAddNewOptions
    });

  },

  handleSubmit() {
    let options = this.state;

    if (options.pollName === '') {
      alert('Please specify a poll name!');
      return;
    }

    fetch('/api/polls/new', {
      method: 'POST',
      body: JSON.stringify(options),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      console.log(response);
      return response.json()
    }).then(json => {
        if (json.error) {
          alert(json.error);
          return;
        }
        this.context.router.push(`/polls/${json._id}`)
      }).catch((err) => console.log(err));
  },

  render() {
    return (
      <div className="row">
        <div className="col-sm-offset-2 col-sm-8 poll-view">
          <h3 htmlFor="poll-name">Poll name:</h3>{' '}
          <input id="poll-name" type="text" onChange={(el) => this.handleNameChange(el.target.value)} className="form-control" placeholder="Poll name" />
          <div className="option-field-container">
            <hr />
            <h3>Options:</h3>
            {this.renderOptions()}
            <div id="add-option-btn" onClick={this.addAnotherOption} className="form-inline text-center add-option">
              <label><span className="glyphicon glyphicon-plus" /> Add another option...</label>
            </div>
            <div className="row">
              <div className="checkbox col-sm-3 col-sm-offset-2">
                <label>
                  <input defaultChecked="checked" onClick={(el) => this.toggleCanAdd(el)} value={this.state.canAdd ? 'on' : 'off'} className="pull-right" type="checkbox" />Allow custom options
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