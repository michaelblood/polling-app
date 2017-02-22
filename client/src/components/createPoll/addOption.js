import React, { PropTypes } from 'react';

const AddOption = ({ onClick, onChange, index, color }) => {
  return (
    <div id={'option-' + index} className="row add-option form-inline">
      <div className="form-group col-sm-6">
        <label htmlFor={'option-name' + index}>Option name:</label>{' '}
        <input
          id={'option-name-' + index}
          className="form-control"
          type="text"
          style={{width: '75%'}}
          placeholder="option text"
          onChange={(el) => onChange(index, 'text', el.target.value)}
        />
      </div>
      <div className="form-group col-sm-3">
        <label htmlFor={'option-color' + index}>Color:</label>{' '}
        <input
          id={'option-color-' + index}
          className="form-control"
          style={{width: '50%'}}
          type="color"
          value={color}
          onChange={(el) => onChange(index, 'color', el.target.value)}
        />
      </div>
      <div className="form-group col-sm-1 col-sm-offset-2">
        <button onClick={() => onClick(index)} style={{width: '100%'}} className="btn-danger btn add-option-delete">
          <span className="glyphicon glyphicon-remove"/>
        </button>
      </div>
    </div>
  );
};
AddOption.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  color: PropTypes.string,
  text: PropTypes.string
};

export default AddOption;
