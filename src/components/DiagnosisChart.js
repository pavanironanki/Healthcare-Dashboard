// DiagnosisChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const DiagnosisChart = ({ diagnosisData }) => {
  const chartData = {
    labels: diagnosisData.map(item => item.month),
    datasets: [
      {
        label: 'Systolic',
        data: diagnosisData.map(item => item.blood_pressure.systolic.value),
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#7c3aed',
        borderWidth: 3,
      },
      {
        label: 'Diastolic',
        data: diagnosisData.map(item => item.blood_pressure.diastolic.value),
        borderColor: '#ec4899',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#ec4899',
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: '500'
          }
        }
      },
      tooltip: {
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
        borderWidth: 1,
        titleColor: '#000',
        bodyColor: '#333',
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14,
            weight: '500'
          }
        }
      },
      y: {
        ticks: {
          font: {
            size: 14,
            weight: '500'
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default DiagnosisChart;
