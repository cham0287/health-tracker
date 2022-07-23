import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function PieChart({ chartData }) {
  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

const options = {
  plugins: {
    title: {
      display: true,
      text: '탄단지 차트',
      color: 'hsl(152deg 68% 32%)',
      font: {
        size: 60,
      },
      padding: {
        top: 30,
        bottom: 30,
      },
      responsive: true,
      animation: {
        animateScale: true,
      },
    },
  },
};
export default PieChart;
