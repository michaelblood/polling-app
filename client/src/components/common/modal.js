import React, { PropTypes } from 'react';

const Modal = React.createClass({

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={() => this.props.onClick()}>Submit</button>
        </div>
      </div>
    );
  }
});

Modal.propTypes = {
  onClick: PropTypes.func;
};

export default Modal;
