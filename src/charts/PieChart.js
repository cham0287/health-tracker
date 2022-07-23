import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function PieChart({ nutrient, chartData }) {
  return (
    <div className='chart'>
      <Doughnut data={chartData} />
    </div>
  );
}

export default PieChart;
