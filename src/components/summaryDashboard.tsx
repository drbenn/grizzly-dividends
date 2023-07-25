/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import './summarydashboard.scss'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ChartJsSummaryData, SummaryChart, TickerDetail } from '../types';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);


export default function SummaryDashboard() { 
  const stateData: TickerDetail[] = useSelector((state: RootState) => state.store.tickerData);
  const [chartData, setChartData] = useState<ChartJsSummaryData[]>();
  const [chartSelected, setChartSelected] = useState<string>('simple');
  const [chartOptions, setChartOptions] = useState<any>();
  const [blendedRateDisplay, setBlendedRateDisplay] = useState('')

  const [totalSimpleInvestDisplay, setTotalSimpleInvestDisplay] = useState(0);
  const [simpleAnnualDividends, setSimpleAnnualDividends] = useState();
  const [simpleBlendedRate, setSimpleBlendedRate] = useState('');

  const [totalDripInvestDisplay, setTotalDripInvestDisplay] = useState(0);
  const [dripAnnualDividends, setDripAnnualDividends] = useState(0);
  const [dripBlendedRate, setDripBlendedRate] = useState('');
  
  const [totalMegaDripInvestDisplay, setTotaMegaDripInvestDisplay] = useState(0);
  const [megaDripAnnualDividends, setMegaDripAnnualDividends] = useState(0);
  const [megaDripBlendedRate, setMegaDripBlendedRate] = useState('');
    
  const monthIndexes = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov:10, Dec: 11 };
  const chartColors2 = ['#70d6ff','#ff70a6','#ff9770','#ffd670','#e9ff70','#333745','#e63462','#fe5f55','#c7efcf','#eef5db', '#70d6ffbf','#ff70a6bf','#ff9770bf','#ffd670bf','#e9ff70bf','#333745bf','#e63462bf','#fe5f55bf','#c7efcfbf','#eef5dbbf', '#70d6ff80','#ff70a680','#ff977080','#ffd67080','#e9ff7080','#33374580','#e6346280','#fe5f5580','#c7efcf80','#eef5db80']

  useEffect(() => {
    // console.log(stateData);
    const dataWithAmounts: TickerDetail[] = stateData.map((item) => {     
      const amount: number = item.amount ? item.amount : 1000;
      return {...item, amount: amount};
    })
    const chartData: SummaryChart[] = dataWithAmounts.map((item) => {
      return {ticker: item.ticker, amount: Number(item.amount), yield: Number(item.dividend_yield), payMonths: item.dividend_payment_months_and_count.dividend_payment_months}
    })

    let displayData;
    if (chartData && chartSelected === 'simple') {
      displayData = getSimpleDataSeries(chartData)
      setBlendedRateDisplay(simpleBlendedRate)
    }
    if (chartData && chartSelected === 'drip') {
      displayData = getDripDataSeries(chartData)
      setBlendedRateDisplay(dripBlendedRate)
    }
    if (chartData && chartSelected === 'megadrip') {
      displayData = getMegaDripDataSeries(chartData)
      setBlendedRateDisplay(megaDripBlendedRate)
    }
    setChartData(displayData);

  }, [stateData, chartSelected, blendedRateDisplay]);

  const options = {
    plugins: {
      title: {
        display: true,
        text: chartOptions?.title ? chartOptions.title : ''
      },
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
          color: 'white'
        },
        border: {
          color: '#3a3a3a'
        }
      },
    },
  };
  
  const labels = chartSelected === 'megadrip' ? 
  ['Yr1', 'Yr2', 'Yr3', 'Yr4', 'Yr5', 'Yr6', 'Yr7', 'Yr8', 'Yr9', 'Yr10']
  :['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const data = {
    labels,
    datasets: chartData?.length ? chartData : [{label:'', data:[], backgroundColor:'white'}]
  };
  
  const handleChartSelection = (type:string): void => {
    setChartSelected(type)
  }

  const formatPercent = (percent: number) => {
    return (percent * 100).toFixed(2);
  }

  const getSimpleDataSeries = (data:SummaryChart[]):ChartJsSummaryData[] => {
    let totalInvest = 0;
    let totalSimpleAnnualDivIncome = 0;
    const simpleReturn: ChartJsSummaryData[] = []; 
    let colorIndex = 0;
    data.forEach((item) => {
      const monthlySeries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const payments = item.payMonths.length;
      const simpleAnnualYield = item.amount * item.yield; 
      const monthlyAmount = (simpleAnnualYield / payments);
      totalInvest += Number(item.amount.toFixed(2))
      totalSimpleAnnualDivIncome += Number(simpleAnnualYield.toFixed(2));
      item.payMonths.forEach((pMonth) => {
        monthlySeries[monthIndexes[pMonth]] += Number(monthlyAmount.toFixed(2));
      })
      simpleReturn.push({label: item.ticker, data: monthlySeries, backgroundColor: chartColors2[colorIndex]});
      colorIndex++;
    })
    const simpleBlendedRate = Number((totalSimpleAnnualDivIncome/totalInvest).toFixed(4))
    setTotalSimpleInvestDisplay(totalInvest);
    setSimpleAnnualDividends(totalSimpleAnnualDivIncome);
    setSimpleBlendedRate(isNaN(simpleBlendedRate) ? '' : formatPercent(simpleBlendedRate));
    setChartOptions({"title": 'Simple Dividend Return'})
    return simpleReturn;
  }

  const getDripDataSeries = (data:SummaryChart[]):ChartJsSummaryData[] => {
    let totalDripAnnualDivIncome = 0;
    const dripReturn: ChartJsSummaryData[] = []; 
    let totalInvest = 0;
    let colorIndex = 0;
    data.forEach((item) => {
      const monthlySeries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const payments = item.payMonths.length;
      const simpleAnnualYield = item.amount * item.yield; 
      const monthlyYield = simpleAnnualYield / payments;
      const monthlyRate = item.yield / payments;
      totalInvest += Number(item.amount.toFixed(2))
      let dripAmount = monthlyYield;
      item.payMonths.forEach((pMonth) => {
        monthlySeries[monthIndexes[pMonth]] += Number(Number(dripAmount).toFixed(2))
        totalDripAnnualDivIncome += Number(Number(dripAmount).toFixed(2))
        dripAmount += (dripAmount * monthlyRate)
      })
      dripReturn.push({label: item.ticker, data: monthlySeries, backgroundColor: chartColors2[colorIndex]});
      colorIndex++;
    })    
    const dripBlendedRate = Number((Number(totalDripAnnualDivIncome)/Number(totalInvest)).toFixed(4))
    setTotalDripInvestDisplay(totalInvest);
    setDripBlendedRate(isNaN(dripBlendedRate) ? '' : formatPercent(dripBlendedRate));
    setDripAnnualDividends(totalDripAnnualDivIncome);
    setChartOptions({"title": 'DRIP 1 Year Dividend Return'})
    return dripReturn;
  }

  const getMegaDripDataSeries = (data:SummaryChart[]):ChartJsSummaryData[] => {
    let megaDripReturn: ChartJsSummaryData[] = [];
    let totalInvest = 0;
    let colorIndex = 0;
   let megaDripTenYrIncome = 0;
    data.forEach((item) => {
      const monthlySeries = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let tenYearSeries;
      totalInvest += Number(item.amount.toFixed(2))
      
      const payments = item.payMonths.length;
      const simpleAnnualYield = item.amount * item.yield; 
      const monthlyYield = simpleAnnualYield / payments;
      const monthlyRate = item.yield / payments
      let dripAmount = monthlyYield;
  
      // establish 1st year DRIP payments
      item.payMonths.forEach((pMonth) => {
        monthlySeries[monthIndexes[pMonth]] += Number(dripAmount.toFixed(2))
        megaDripTenYrIncome += Number(dripAmount.toFixed(2))
        dripAmount += (dripAmount * monthlyRate)
      })
      tenYearSeries = monthlySeries;
      // add additional slots for each month of remaining 9 years
      for (let i = 0; i < 108; i++) { //108
        tenYearSeries.push(0)
      }
      // add DRIP amount for remaining 9 years
      for (let i = 12; i < 120; i++) { //120
        const monthIndex = (i % 12)
        const key = Object.keys(monthIndexes)[monthIndex]
        if (item.payMonths.includes(key)) {
          tenYearSeries[i] = Number(dripAmount.toFixed(2));
          megaDripTenYrIncome += Number(dripAmount.toFixed(2))
          dripAmount += (dripAmount * monthlyRate)
        } else {tenYearSeries[i] = 0;}
      }
      // convert 10 years of monthly data to annual // STILL NOT GOOD
      const annualizedTenYearMegaDripSeries = [];
      let annualAmount = 0;
      for (let i = 0; i < 120; i++) {
        if (i === 11 || i === 23 || i === 35 || i === 47 || i === 59 || i === 71 || i === 83 || i === 95 || i === 107 || i === 119) {
          annualAmount += tenYearSeries[i];
          annualizedTenYearMegaDripSeries.push(Number(annualAmount.toFixed(2)))
          annualAmount = 0;
        }
        else {
          annualAmount += tenYearSeries[i];
        }
      }
      megaDripReturn.push({label: item.ticker, data: annualizedTenYearMegaDripSeries, backgroundColor: chartColors2[colorIndex]});
      colorIndex++;
  
    })
    const megaDripBlendedRate = ((Number(megaDripTenYrIncome)/Number(totalInvest))/10).toFixed(4)
    setTotaMegaDripInvestDisplay(totalInvest)
    setMegaDripAnnualDividends(megaDripTenYrIncome);
    setMegaDripBlendedRate(isNaN(megaDripBlendedRate) ? '' : formatPercent(megaDripBlendedRate));
    setChartOptions({"title": '10 Years of DRIP'})
    return megaDripReturn;
  }


  
  return (
    <>
    {totalSimpleInvestDisplay > 0 &&

    
      <div className='dash-container'>
        <div className='metric-container'>

          <div>
            <button onClick={() => handleChartSelection("simple")} className='chart-type-button'>Simple</button>
            <button onClick={() => handleChartSelection("drip")} className='chart-type-button'>DRIP</button>
            <button onClick={() => handleChartSelection("megadrip")} className='chart-type-button'>DRIP(10)</button>
          </div>
          <div className='blended-yield-box'>
            <div className='total-title'>
              Blended Yield
            </div>
            <div className='metric-number'>
              {blendedRateDisplay}
              %
            </div>
          </div>

          <div className='annual-income-box'>
            <div className='total-title'>
              Annual Dividends
            </div>
            <div className='metric-number'>
              $
              {chartSelected === 'simple' && new Intl.NumberFormat('en-US').format(simpleAnnualDividends) }
              {chartSelected === 'drip' && new Intl.NumberFormat('en-US').format(dripAnnualDividends) }
              {chartSelected === 'megadrip' && new Intl.NumberFormat('en-US').format(megaDripAnnualDividends) }
            </div>
          </div>

          <div className='total-invested-box'>
            <div className='total-title'>
              Total Investment
            </div>
            <div className='metric-number'>
              $
              {chartSelected === 'simple' && new Intl.NumberFormat('en-US').format(totalSimpleInvestDisplay) }
              {chartSelected === 'drip' && new Intl.NumberFormat('en-US').format(totalDripInvestDisplay) }
              {chartSelected === 'megadrip' && new Intl.NumberFormat('en-US').format(totalMegaDripInvestDisplay) }
            </div>
          </div>

        </div>
        <div className='summary-chart-container'>
          <Bar options={options} data={data} />
        </div>
      </div>
    }
    </>
  )
}