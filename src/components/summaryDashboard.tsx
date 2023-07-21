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

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5,4,3,2,1,0,1,],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [5,4,3,2,1,0,1,],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: [5,4,3,2,1,0,1,],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};


export default function SummaryDashboard(props) { 
  console.log(props)
  

  const testData = [
    {
      annual_dividend: [
        {
          total_annual_dividend: 4.18,
          year: 2023,
          yoy_linear_growth_rate: -0.45
        },
        {
          total_annual_dividend: 7.6,
          year: 2022,
          yoy_linear_growth_rate: 0.1515
        },
        {
          total_annual_dividend: 6.6,
          year: 2021,
          yoy_linear_growth_rate: 0.1
        },
        {
          total_annual_dividend: 6,
          year: 2020,
          yoy_linear_growth_rate: 0.1029
        },
        {
          total_annual_dividend: 5.44,
          year: 2019,
          yoy_linear_growth_rate: 0.3204
        },
        {
          total_annual_dividend: 4.12,
          year: 2018,
          yoy_linear_growth_rate: 0.1573
        },
        {
          total_annual_dividend: 3.56,
          year: 2017,
          yoy_linear_growth_rate: 0.2899
        },
        {
          total_annual_dividend: 2.76,
          year: 2016,
          yoy_linear_growth_rate: 0.1695
        },
        {
          total_annual_dividend: 2.36,
          year: 2015,
          yoy_linear_growth_rate: 0.2553
        },
        {
          total_annual_dividend: 1.88,
          year: 2014,
          yoy_linear_growth_rate: 0.2051
        },
        {
          total_annual_dividend: 1.56,
          year: 2013,
          yoy_linear_growth_rate: 0.3448
        },
        {
          total_annual_dividend: 1.16,
          year: 2012,
          yoy_linear_growth_rate: 0.1154
        },
        {
          total_annual_dividend: 1.04,
          year: 2011,
          yoy_linear_growth_rate: 0.1008
        },
        {
          total_annual_dividend: 0.9447499999999999,
          year: 2010,
          yoy_linear_growth_rate: 0.0497
        },
        {
          total_annual_dividend: 0.9,
          year: 2009,
          yoy_linear_growth_rate: 0
        },
        {
          total_annual_dividend: 0.9,
          year: 2008,
          yoy_linear_growth_rate: 0
        },
        {
          total_annual_dividend: 0.9,
          year: 2007,
          yoy_linear_growth_rate: 0.3333
        },
        {
          total_annual_dividend: 0.675,
          year: 2006,
          yoy_linear_growth_rate: 0.6875
        },
        {
          total_annual_dividend: 0.4,
          year: 2005,
          yoy_linear_growth_rate: 0.2308
        },
        {
          total_annual_dividend: 0.325,
          year: 2004,
          yoy_linear_growth_rate: 0.25
        },
        {
          total_annual_dividend: 0.26,
          year: 2003,
          yoy_linear_growth_rate: 0.2381
        },
        {
          total_annual_dividend: 0.21000000000000002,
          year: 2002,
          yoy_linear_growth_rate: 0.2353
        },
        {
          total_annual_dividend: 0.17,
          year: 2001,
          yoy_linear_growth_rate: 0.0625
        },
        {
          total_annual_dividend: 0.16,
          year: 2000,
          yoy_linear_growth_rate: -0.0588
        },
        {
          total_annual_dividend: 0.17,
          year: 1999,
          yoy_linear_growth_rate: 0
        },
        {
          total_annual_dividend: 0.16999999999999998,
          year: 1998,
          yoy_linear_growth_rate: -0.2766
        },
        {
          total_annual_dividend: 0.235,
          year: 1997,
          yoy_linear_growth_rate: 0.0217
        },
        {
          total_annual_dividend: 0.22999999999999998,
          year: 1996,
          yoy_linear_growth_rate: 0.2105
        },
        {
          total_annual_dividend: 0.19000000000000003,
          year: 1995,
          yoy_linear_growth_rate: 0.7273
        },
        {
          total_annual_dividend: 0.11,
          year: 1994,
          yoy_linear_growth_rate: -0.0833
        },
        {
          total_annual_dividend: 0.12,
          year: 1993,
          yoy_linear_growth_rate: -0.1111
        },
        {
          total_annual_dividend: 0.135,
          year: 1992,
          yoy_linear_growth_rate: 0.125
        },
        {
          total_annual_dividend: 0.12,
          year: 1991,
          yoy_linear_growth_rate: 0
        },
        {
          total_annual_dividend: 0.12,
          year: 1990,
          yoy_linear_growth_rate: 0
        },
        {
          total_annual_dividend: 0.12,
          year: 1989,
          yoy_linear_growth_rate: 0.0909
        },
        {
          total_annual_dividend: 0.11,
          year: 1988,
          yoy_linear_growth_rate: 4.5
        },
        {
          total_annual_dividend: 0.02,
          year: 1987
        }
      ],
      backup_stock_price: null,
      backup_stock_price_date_saved: null,
      beta: '0.99556273',
      dividend_payment_months_and_count: {
        dividend_payment_months: [
          'May',
          'Mar',
          'Nov',
          'Aug'
        ],
        ttm_dividend_payment_count: 4
      },
      dividend_yield: '0.0259',
      five_year_cagr: '0.1638',
      growth_all_years_of_history: false,
      industry: 'Retail',
      logo: 'https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/HD.svg',
      name: 'HOME DEPOT INC',
      payout_ratios: [
        {
          net_income_loss: 16433000000,
          payout_ratio: 4.0163086472342235e-10,
          year: 2021
        },
        {
          net_income_loss: 12866000000,
          payout_ratio: 4.66345406497746e-10,
          year: 2020
        },
        {
          net_income_loss: 11242000000,
          payout_ratio: 4.838996619818538e-10,
          year: 2019
        },
        {
          net_income_loss: 11121000000,
          payout_ratio: 3.7047028144950997e-10,
          year: 2018
        },
        {
          net_income_loss: 8630000000,
          payout_ratio: 4.1251448435689455e-10,
          year: 2017
        },
        {
          net_income_loss: 7957000000,
          payout_ratio: 3.468643961291944e-10,
          year: 2016
        },
        {
          net_income_loss: 7009000000,
          payout_ratio: 3.3670994435725495e-10,
          year: 2015
        },
        {
          net_income_loss: 6345000000,
          payout_ratio: 2.962962962962963e-10,
          year: 2014
        },
        {
          net_income_loss: 3338000000,
          payout_ratio: 2.83028759736369e-10,
          year: 2010
        }
      ],
      three_year_cagr: '0.1179',
      ticker: 'HD',
      type: 'common_stock',
      website: 'https://www.homedepot.com/',
      year_price_high: '347.25',
      year_price_low: '265.61',
      years_dividend_growth: '13'
    },
    {
      annual_dividend: [
        {
          total_annual_dividend: 0.27599999999999997,
          year: 2023,
          yoy_linear_growth_rate: -0.4942
        },
        {
          total_annual_dividend: 0.5457,
          year: 2022,
          yoy_linear_growth_rate: 0.0108
        },
        {
          total_annual_dividend: 0.5398499999999999,
          year: 2021,
          yoy_linear_growth_rate: 0.0045
        },
        {
          total_annual_dividend: 0.5374500000000001,
          year: 2020,
          yoy_linear_growth_rate: 0.0062
        },
        {
          total_annual_dividend: 0.53415,
          year: 2019,
          yoy_linear_growth_rate: 0.0042
        },
        {
          total_annual_dividend: 0.5319,
          year: 2018,
          yoy_linear_growth_rate: 0.0155
        },
        {
          total_annual_dividend: 0.5237999999999999,
          year: 2017,
          yoy_linear_growth_rate: 0.0582
        },
        {
          total_annual_dividend: 0.495,
          year: 2016,
          yoy_linear_growth_rate: 0.0645
        },
        {
          total_annual_dividend: 0.4650000000000001,
          year: 2015,
          yoy_linear_growth_rate: 0.2917
        },
        {
          total_annual_dividend: 0.3600000000000001,
          year: 2014,
          yoy_linear_growth_rate: -0.7584
        },
        {
          total_annual_dividend: 1.4900000000000002,
          year: 2013
        }
      ],
      backup_stock_price: null,
      backup_stock_price_date_saved: null,
      beta: '1.4018717',
      dividend_payment_months_and_count: {
        dividend_payment_months: [
          'Jun',
          'May',
          'Apr',
          'Mar',
          'Feb',
          'Jan',
          'Dec',
          'Nov',
          'Oct',
          'Sep',
          'Aug',
          'Jul'
        ],
        ttm_dividend_payment_count: 12
      },
      dividend_yield: '0.0334',
      five_year_cagr: '0.0082',
      growth_all_years_of_history: false,
      industry: 'Real Estate',
      logo: 'https://static.finnhub.io/logo/3157a5ad0c0a6f787c55a4a8fdf9dba1f47ee97a4ee6cc4a7effdf04a057e118.png',
      name: 'GLADSTONE LAND CORP',
      payout_ratios: [
        {
          net_income_loss: 4716000,
          payout_ratio: 1.1571246819338421e-7,
          year: 2022
        },
        {
          net_income_loss: 3514000,
          payout_ratio: 1.5362834376778598e-7,
          year: 2021
        },
        {
          net_income_loss: 4955000,
          payout_ratio: 1.0846619576185672e-7,
          year: 2020
        },
        {
          net_income_loss: 1762000,
          payout_ratio: 3.0314982973893304e-7,
          year: 2019
        },
        {
          net_income_loss: 2766000,
          payout_ratio: 1.9229934924078094e-7,
          year: 2018
        },
        {
          net_income_loss: -34000,
          payout_ratio: -0.000015405882352941175,
          year: 2017
        },
        {
          net_income_loss: 473488,
          payout_ratio: 0.0000010454330415976752,
          year: 2016
        },
        {
          net_income_loss: 568545,
          payout_ratio: 8.178772128855237e-7,
          year: 2015
        },
        {
          net_income_loss: -125133,
          payout_ratio: -0.0000028769389369710637,
          year: 2014
        }
      ],
      three_year_cagr: '0.0072',
      ticker: 'LAND',
      type: 'reit',
      website: 'https://www.gladstonefarms.com/',
      year_price_high: '27.45',
      year_price_low: '14.95',
      years_dividend_growth: '8'
    }
  ]
  
  return (
    <>
    <div className='dash-container'>
      <div className='metric-container'>

        <div className='blended-yield-box'>
          <div className='metric-title'>
            Blended Yield
          </div>
          <div className='metric-number'>
            {"X.XX"}%
          </div>
        </div>

        <div className='annual-income-box'>
          <div className='metric-title'>
            Annual Dividends
          </div>
          <div className='metric-number'>
            ${"X.XX"}
          </div>
        </div>

        <div className='total-invested-box'>
          <div className='metric-title'>
            Total Investment
          </div>
          <div className='metric-number'>
            ${"X.XX"}
          </div>
        </div>

      </div>
      <div className='summary-chart-container'>
      <Bar options={options} data={data} />
      </div>



    </div>
    
    </>
  )
}