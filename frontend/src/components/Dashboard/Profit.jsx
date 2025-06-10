import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Profit',
    },
  },
};

const labels = ['May', 'June', 'July', 'Aug', 'Sep'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [40000, 10000, 25000, 5000, 35000],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export default function Profit(){
    return(
        <div className='h-[10%] w-[60%]'>
        <Line options={options} data={data} className= 'my-8  shadow-md border-1 rounded-xl border-gray-200 p-5'/>
        </div>
    )
}
