import React, { PropTypes } from 'react';
import Alert from 'react-bootstrap/lib/Alert';

const AlertPopup = ( { type, message, onClick } ) => {
  return (
    <Alert bsStyle={type} onDismiss={onClick}>
      <h4>{message}</h4>
    </Alert>
  );        
};

AlertPopup.propTypes = {
  type: PropTypes.oneOf(['danger', 'success', 'warning', 'info']),
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default AlertPopup;
