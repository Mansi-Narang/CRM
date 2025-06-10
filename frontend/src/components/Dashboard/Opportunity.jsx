import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['Leads', 'Proposals', 'Negotiation', 'Contracts sent', 'Won', 'Lost'],
  datasets: [
    {
      label: 'Opportunity Stage',
      data: [120, 100, 60, 20, 20, 20],
      backgroundColor: [
        '#6A5ACD', // Leads
        '#FF69B4', // Proposals
        '#20B2AA', // Negotiation
        '#9932CC', // Contracts sent
        '#32CD32', // Won
        '#D3D3D3', // Lost
      ],
      borderWidth: 0,
      cutout: '70%', // creates the doughnut effect
    },
  ],
};

const legendData = [
  { label: 'Leads', value: 120, color: '#6A5ACD' },
  { label: 'Proposals', value: 100, color: '#FF69B4' },
  { label: 'Negotiation', value: 60, color: '#20B2AA' },
  { label: 'Contracts sent', value: 20, color: '#9932CC' },
  { label: 'Won', value: 20, color: '#32CD32' },
  { label: 'Lost', value: 20, color: '#D3D3D3' },
];

export default function OpportunityStageChart() {
  const total = legendData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="border-2 rounded-xl border-gray-200 p-6 shadow-md w-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Opportunity Stage</h2>

      <div className="flex gap-8 justify-around justify-center items-center">
        <div className="relative w-[350px] h-[320px]">
          <Doughnut data={chartData} className='mx-3 my-8'/>
          </div>
         
    

        <div className="flex flex-col gap-3">
          {legendData.map((item, index) => (
            <div key={index} className="flex items-center justify-between w-full gap-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full m-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="font-semibold text-gray-800">{item.label}</span>
              </div>
              <span className="text-gray-500">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
