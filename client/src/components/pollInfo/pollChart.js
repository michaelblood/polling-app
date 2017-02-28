import React, { PropTypes } from 'react';
import { Pie } from 'react-chartjs-2';

const parseOptions = (options) => {
  let counts = [];
  let colors = [];
  let labels = [];
  options.forEach((el) => {
    counts.push(el.count || 0);
    colors.push(el.color);
    labels.push(el.option);
  });
  return { counts, colors, labels };
};

const PollChart = ({ options }) => {
  let { counts, labels, colors } = parseOptions(options);
  return (
    <div className="col-xs-12 col-md-6">
      <Pie
        data={{
          labels,
          datasets: [
            {
              data: counts,
              backgroundColor: colors
            }
          ]
        }}
        options={{ responsive: true }}
      />
    </div>
  );
};

PollChart.propTypes = {
  options: PropTypes.arrayOf(Object),

};

export default PollChart;
