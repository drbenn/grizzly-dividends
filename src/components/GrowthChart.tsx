/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import './summarydashboard.scss'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



export default function GrowthChart({props}) { 
  

  const yAxisLabels: number[] = [];
  const dataSet: number[] = []
  props.forEach((item) => {
    yAxisLabels.unshift(item.year)
    dataSet.unshift(Number(Number(item.yoy_linear_growth_rate * 100).toFixed(2)))
  })
  
  
  const options: any = {
    plugins: {
      title: {
        display: true,
        text: 'Year Over Year Dividend Growth Rate',
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
          // color: '#3a3a3a'
          color: "transparent"
        }
      },
      y: {
        stacked: true,
        grid: {
          color: 'rgb(220, 220, 220, 0.8)'
        },
        border: {
          // color: '#3a3a3a'
          color: "transparent"
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
        backgroundColor: '#333745',
      }
    ],
  };
  

  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}