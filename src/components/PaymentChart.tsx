/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState } from 'react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export default function PaymentChart({props}) { 
  

  let yAxisLabels = [];
  let dataSet = []
  props.forEach((item) => {
    yAxisLabels.unshift(item.year)
    dataSet.unshift(Number(item.total_annual_dividend).toFixed(2))
  })
  
  
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Dividends per Share',
        font: {size: 16, weight: 400, family: 'Poppins'}
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: 'white'
        }
      },
      y: {
        stacked: true,
        grid: {
          color: 'white'
        }
      },
    },
  };
  
  const labels = yAxisLabels;
  
  const data = {
    labels,
    datasets: [
      {
        label: '$',
        data: dataSet,
        backgroundColor: 'rgb(120,245,160,0.8)',
      }
    ],
  };
  

  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}