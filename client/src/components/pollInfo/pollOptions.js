import React, { PropTypes } from 'react';

const parseOptions = ({options, onClick}) => {
  let arr = options.map(option => (
    <option onClick={() => onClick(option._id)} key={option._id}>
      {option.option}
    </option>
    )
  );
  return arr;
};

const PollOptions = ({ options, onClick, canAddNewOptions, addNew }) => {
  let list = parseOptions({options, onClick});
  return (
    <div className="col-xs-8 col-md-4">
      <h1>poll options</h1>
      <select name="options" id="" className="form-control">
        <option>Please select an option</option>
        {list}
        {canAddNewOptions && <option onClick={addNew}>Don't see a good option? Write your own!</option> }
      </select>
    </div>
  );
};

PollOptions.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default PollOptions;
