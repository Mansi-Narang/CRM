import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
    labels: ['Leads', 'Sales Calls', 'Follow-up', 'Conversion', 'Sale'],
    datasets: [
      {
        label: 'Deal Funnel',
        data: [120, 100, 60, 20, 15],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        pointBackgroundColor: [
          '#6A5ACD', // Leads
          '#00BFFF', // Sales Calls
          '#9932CC', // Follow-up
          '#FF69B4', // Conversion
          '#20B2AA', // Sale
        ],
        pointRadius: 5,
      },
    ],
  };

  const legendData = [
    { label: 'Leads', value: 120, color: '#6A5ACD' },
    { label: 'Sales Calls', value: 100, color: '#00BFFF' },
    { label: 'Follow-up', value: 60, color: '#9932CC' },
    { label: 'Conversion', value: 20, color: '#FF69B4' },
    { label: 'Sale', value: 15, color: '#20B2AA' },
  ];
  

const options = {
    scales: {
      r: {
        pointLabels: {
          color: 'rgb(33, 37, 41)', 
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          color: 'rgba(100, 100, 100, 1)',
        },
        grid: {
          color: 'rgba(200, 200, 200,0.7)' 
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)' 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black' 
        }
      }
    }
  };
  


export default function DealFunnel() {
    return (    
        <div className="border-2 rounded-xl border-gray-200 p-6 shadow-md w-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Deal Funnel</h2>
    <div className='h-100 w-fit flex gap-16'>
        
    <Radar data={data} options={options}/>

    <div className='flex flex-col justify-center pe-4'>
    {legendData.map((item, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <div
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: item.color,
            marginRight: '8px',
          }}
        ></div>
        <span style={{ fontWeight: 600, marginRight: '8px' }}>{item.label}</span>
        <span style={{ color: '#888' }}>{item.value}</span>
      </div>
    ))}
  </div>
    </div>
    </div>
)}
