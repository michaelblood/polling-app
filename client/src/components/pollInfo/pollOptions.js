import React, { PropTypes } from 'react';
import { getReadableColor } from '../utilities';

const parseOptions = ({options, onClick}) => {
  let arr = options.map((option) => (
    <button
      className="btn btn-default btn-lg poll-options-btn"
      onClick={() => onClick(option._id)}
      key={option._id}
      style={{
        margin: '2px',
        color: option.color,
        borderColor: option.color,
        background: getReadableColor(option.color)
      }}
    >
      {option.option}
    </button>
    )
  );
  return arr;
};

const PollOptions = ({ options, onClick, canAddNewOptions, addNew }) => {
  let list = parseOptions({options, onClick});
  return (
    <div className="col-xs-8 col-md-4">
      <h1 style={{color: "#31708f"}}>What do you think?</h1>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          {list}
          {canAddNewOptions ?
          <div>
            <hr/>
            <button
              className="btn btn-success btn-block"
              onClick={addNew}
              style={{ whiteSpace: 'normal' }}
            >
              Don't see a good option? Write your own!
            </button>
          </div>
          :
          <div>
            <hr/>
            <button className="btn disabled btn-default" style={{whiteSpace: 'normal'}}>
              The poll creator said you can't add your own option.
            </button>
          </div>}
        </div>
      </div>
    </div>
  );
};


PollOptions.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default PollOptions;
