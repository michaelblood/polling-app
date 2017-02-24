import React, { PropTypes } from 'react';

const getReadableColor = (color) => {
  let r = parseInt(color[1] + color[2], 16);
  let g = parseInt(color[3] + color[4], 16);
  let b = parseInt(color[5] + color[6], 16);
  let sum = r + g + b;
  return (sum > 382) ? '#000' : '#FFF';
};

const AddOption = ({ onClick, onChange, index, color }) => {
  return (
    <div id={'option-' + index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="panel panel-default" style={{borderColor: color}}>
        <div className="panel-heading text-center" style={{backgroundColor: color, borderColor: color, color: getReadableColor(color)}}>
          <h3>Option</h3>
        </div>
        <div className="panel-body">
          <div className="form-group">
            <label htmlFor={'option-name' + index}>Option name: </label>
            <input
              id={'option-name-' + index}
              className="form-control"
              type="text"
              style={{width: '100%'}}
              placeholder='Option name'
              onChange={el => onChange(index, 'text', el.target.value)}
            />
          </div>
          <hr style={{borderColor: color}} />
          <div className="form-group">
            <label htmlFor={'option-color' + index}>Option color (for chart): </label>
            <input
              id={'option-color-' + index}
              className="form-control color-input"
              style={{width: '100%'}}
              type="color"
              value={color}
              onChange={el => onChange(index, 'color', el.target.value)}
            />
          </div>
          <hr style={{borderColor: color}} />
          <button
            onClick={() => onClick(index)}
            className="btn btn-danger btn-block"
          ><span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
AddOption.propTypes = {
  index: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  color: PropTypes.string
};

export default AddOption;
