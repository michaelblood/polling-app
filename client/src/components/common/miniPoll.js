import React, { PropTypes } from 'react';

const getReadableColor = (color) => {
  let r = parseInt(color[1] + color[2], 16);
  let g = parseInt(color[3] + color[4], 16);
  let b = parseInt(color[5] + color[6], 16);
  let sum = r + g + b;
  return (sum > 382) ? '#000' : '#FFF';
};

const MiniPoll = ({ poll, onClick }) => {

  let color = poll.options.reduce((prev, cur) => {
    if (cur.count > prev.count) return cur;
    return prev;
  }).color;
  
  let created = new Date(poll.created);
  let date = created.toLocaleDateString();
  let time = created.toLocaleTimeString();
  return (
    <div className="col-xs-12 col-sm-6">
      <div
        style={{borderColor: color, boarderRadius: '3px', borderWidth: '5px', backgroundColor: '#FFF'}}
        className="panel panel-default mini-poll"
        onClick={() => onClick(poll._id)}
      >
        <div
          className="panel-heading"
          style={{backgroundColor: getReadableColor(color)}}
        >
          <h3 className="mini-poll-heading" style={{color: color}}>{poll.name}</h3>
        </div>
        <div className="panel-body">
          <p className="pull-right">
            <i>Created on <span title={'at ' + time}>{date}</span></i>
          </p>
        </div>
      </div>
    </div>
  );
};

MiniPoll.propTypes = {
  poll: PropTypes.object,
  onClick: PropTypes.func
};

export default MiniPoll;
