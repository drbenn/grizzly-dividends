import './summarydashboard.scss'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function PayoutChart({props}) { 
  const yAxisLabels: number[] = [];
  const dataSet: number[] = []
  props.forEach((item) => {
    yAxisLabels.unshift(item.year)
    dataSet.unshift(Number(item.payout_ratio * 100).toFixed(2))
  })

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Payout Ratio',
        font: {size: 16, weight: 400, family: 'Poppins'},
        color: '#3a3a3a'
      },
      Legend: {
        labels: {
          color: 'red'
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: 'white'
        },
        border: {
          color: '#3a3a3a'
        }
      },
      y: {
        stacked: true,
        grid: {
          color: 'rgb(220, 220, 220, 0.8)'
        },
        border: {
          color: '#3a3a3a'
        }
      },
    },
  };
  
  
  const labels = yAxisLabels;
  
  const data = {
    labels,
    datasets: [
      {
        label: '%',
        data: dataSet,
        backgroundColor: '#e63462',
      }
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}