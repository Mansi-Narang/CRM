import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05', 'Sep 06', 'Sep 07', 'Sep 08'];

const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [40000, 45000, 34000, 18000, 3000, 50000, 25000, 45000],
      backgroundColor: '#5A4BFF', // Purple-Blue
      yAxisID: 'yRevenue',
      borderRadius: 1,
      barThickness : 30
    },
    {
      label: 'Lead',
      data: [45000, 47000, 28000, 7000, 7000, 25000, 15000, 50000],
      backgroundColor: '#F45CA6', // Pink
      yAxisID: 'yLead',
      borderRadius: 1,
      barThickness : 30
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#000',
        font: { weight: 'bold' },
      },
    },
    title: {
      display: true,
      text: 'Revenue vs Leads',
      align: 'start',
      font: {
        size: 20,
        weight: 'bold',
      },
      color: '#1F2937',
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#555',
        font: {
          weight: 'bold',
        },
      },
      grid: {
        color: 'rgba(0,0,0,0.05)',
      },
      
      categoryPercentage: 0.6,
    },
    yRevenue: {
      type: 'linear',
      position: 'left',
      ticks: {
        callback: (value) => `$${(value / 1000).toFixed(0)},000`,
        color: '#5A4BFF',
      },
      title: {
        display: true,
        text: 'Revenue',
        color: '#5A4BFF',
        font: {
          weight: 'bold',
        },
      },
    },
    yLead: {
      type: 'linear',
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: '#F45CA6',
      },
      title: {
        display: true,
        text: 'Lead',
        color: '#F45CA6',
        font: {
          weight: 'bold',
        },
      },
    },
  },
};

export default function RevenueVsLead() {
  return (
    <div className=" h-[400px] p-4 m-8 border-gray-200 rounded-xl shadow border">
      <Bar data={data} options={options} />
    </div>
  );
}
