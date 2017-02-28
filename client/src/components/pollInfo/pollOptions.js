import React, { PropTypes } from 'react';

const parseOptions = ({options, onClick}) => {
  let arr = options.map(option => (
    <button
      className="btn btn-default"
      onClick={() => onClick(option._id)}
      key={option._id}
      style={{
        
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
      <h1>poll options</h1>
      {list}
      {canAddNewOptions && <button className="btn btn-success" onClick={addNew}>Don't see a good option? Write your own!</button> }
    </div>
  );
};


PollOptions.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default PollOptions;
