import React, { PropTypes } from 'react';

const Modal = React.createClass({
  getInitialState() {
    return {
      optionText: '',
    }
  },

  handleChange(e) {
    this.setState({
      optionText: e.target.value
    });
  },
  //
  // figure out why modal doesn't display
  //
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <input
            type="text"
            value={this.state.optionText}
            onChange={(e) => this.handleChange(e)}
            className="form-control input-lg"
            placeholder="new option text"
          />
          <button className="btn btn-primary" onClick={() => this.props.onClick(this.state.optionText)}>Submit</button>
          <button className="btn btn-danger" onClick={() => this.props.destroy()}>Cancel</button>
        </div>
      </div>
    );
  }
});

Modal.propTypes = {
  onClick: PropTypes.func
};

export default Modal;
