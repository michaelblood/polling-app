import React, { PropTypes } from 'react';

import { AlertPopup } from '../common'

const Modal = React.createClass({
  getInitialState() {
    return {
      optionText: '',
      alert: null,
    }
  },

  handleChange(e) {
    this.setState({
      optionText: e.target.value
    });
  },

  handleClick() {
    const text = this.state.optionText;
    if (text === '') {
      this.setState({
        alert: {
          type: 'warning',
          message: `Option can't be empty!`
        }
      });
      return;
    }
    this.props.onClick(text);
  },

  dismissAlert() {
    this.setState({
      alert: null,
    });
  },
  
  render() {
    return (
      <div className="custom-modal">
        <div className="panel">
          <div className="panel-heading" style={{marginBottom: '0px', paddingBottom: '0px'}}>
            <h3 className="modal-heading">Add your option and press Submit.</h3>
            <hr />
          </div>
          <div className="panel-body">
            {!!this.state.alert && <AlertPopup message={this.state.alert.message} onClick={this.dismissAlert} type={this.state.alert.type} />}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <label htmlFor="modal-input">Option:</label>
                <input
                  id="modal-input"
                  type="text"
                  value={this.state.optionText}
                  onChange={(e) => this.handleChange(e)}
                  className="form-control input-lg"
                  placeholder="new option text"
                />
              </div>
              <hr />
              <div
                className="modal-btn-wrapper"
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                <button type="button" className="btn btn-danger" onClick={this.props.destroy}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

Modal.propTypes = {
  onClick: PropTypes.func,
  destroy: PropTypes.func,
};

export default Modal;
