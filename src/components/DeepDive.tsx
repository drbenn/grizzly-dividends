/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from 'react'
import './deepdive.scss'
import back from '/back.png'
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import PaymentChart from './PaymentChart';
import PayoutChart from './PayoutChart';
import { useNavigate } from 'react-router-dom';



export default function DeepDive() { 
  const navigate = useNavigate();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentHi, setCurrentHi] = useState(0);
  const [currentLo, setCurrentLo] = useState(0);
  const [deepClass, setDeepClass] = useState("deep-dive-container");  
  const [deepCloseClass, setDeepCloseClass] = useState("'close-deep-icon");
  const [ticker, setTicker] = useState("HD");

  // const [data, setData] = useState();
  // const FINNHUB_API_KEY = "ci8fvr1r01qnrgm362rgci8fvr1r01qnrgm362s0"
  
  const deepDiveData = useSelector((state: RootState) => state.store.tickers)

  useEffect(() => {
    if (ticker) {
      const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY
      fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_API_KEY}`).then(
        (res) => res.json()).then(
          (data) => {
            setCurrentPrice(data?.c)
            setCurrentHi(data?.h)
            setCurrentLo(data?.l)
          }      
      )
    }
  }, [ticker, currentPrice, currentHi, currentLo]);


  const data = {
    "annual_dividend": [
        {
            "total_annual_dividend": 4.18,
            "year": 2023,
            "yoy_linear_growth_rate": -0.45
        },
        {
            "total_annual_dividend": 7.6,
            "year": 2022,
            "yoy_linear_growth_rate": 0.1515
        },
        {
            "total_annual_dividend": 6.6,
            "year": 2021,
            "yoy_linear_growth_rate": 0.1
        },
        {
            "total_annual_dividend": 6,
            "year": 2020,
            "yoy_linear_growth_rate": 0.1029
        },
        {
            "total_annual_dividend": 5.44,
            "year": 2019,
            "yoy_linear_growth_rate": 0.3204
        },
        {
            "total_annual_dividend": 4.12,
            "year": 2018,
            "yoy_linear_growth_rate": 0.1573
        },
        {
            "total_annual_dividend": 3.56,
            "year": 2017,
            "yoy_linear_growth_rate": 0.2899
        },
        {
            "total_annual_dividend": 2.76,
            "year": 2016,
            "yoy_linear_growth_rate": 0.1695
        },
        {
            "total_annual_dividend": 2.36,
            "year": 2015,
            "yoy_linear_growth_rate": 0.2553
        },
        {
            "total_annual_dividend": 1.88,
            "year": 2014,
            "yoy_linear_growth_rate": 0.2051
        },
        {
            "total_annual_dividend": 1.56,
            "year": 2013,
            "yoy_linear_growth_rate": 0.3448
        },
        {
            "total_annual_dividend": 1.16,
            "year": 2012,
            "yoy_linear_growth_rate": 0.1154
        },
        {
            "total_annual_dividend": 1.04,
            "year": 2011,
            "yoy_linear_growth_rate": 0.1008
        },
        {
            "total_annual_dividend": 0.9447499999999999,
            "year": 2010,
            "yoy_linear_growth_rate": 0.0497
        },
        {
            "total_annual_dividend": 0.9,
            "year": 2009,
            "yoy_linear_growth_rate": 0
        },
        {
            "total_annual_dividend": 0.9,
            "year": 2008,
            "yoy_linear_growth_rate": 0
        },
        {
            "total_annual_dividend": 0.9,
            "year": 2007,
            "yoy_linear_growth_rate": 0.3333
        },
        {
            "total_annual_dividend": 0.675,
            "year": 2006,
            "yoy_linear_growth_rate": 0.6875
        },
        {
            "total_annual_dividend": 0.4,
            "year": 2005,
            "yoy_linear_growth_rate": 0.2308
        },
        {
            "total_annual_dividend": 0.325,
            "year": 2004,
            "yoy_linear_growth_rate": 0.25
        },
        {
            "total_annual_dividend": 0.26,
            "year": 2003,
            "yoy_linear_growth_rate": 0.2381
        },
        {
            "total_annual_dividend": 0.21000000000000002,
            "year": 2002,
            "yoy_linear_growth_rate": 0.2353
        },
        {
            "total_annual_dividend": 0.17,
            "year": 2001,
            "yoy_linear_growth_rate": 0.0625
        },
        {
            "total_annual_dividend": 0.16,
            "year": 2000,
            "yoy_linear_growth_rate": -0.0588
        },
        {
            "total_annual_dividend": 0.17,
            "year": 1999,
            "yoy_linear_growth_rate": 0
        },
        {
            "total_annual_dividend": 0.16999999999999998,
            "year": 1998,
            "yoy_linear_growth_rate": -0.2766
        },
        {
            "total_annual_dividend": 0.235,
            "year": 1997,
            "yoy_linear_growth_rate": 0.0217
        },
        {
            "total_annual_dividend": 0.22999999999999998,
            "year": 1996,
            "yoy_linear_growth_rate": 0.2105
        },
        {
            "total_annual_dividend": 0.19000000000000003,
            "year": 1995,
            "yoy_linear_growth_rate": 0.7273
        },
        {
            "total_annual_dividend": 0.11,
            "year": 1994,
            "yoy_linear_growth_rate": -0.0833
        },
        {
            "total_annual_dividend": 0.12,
            "year": 1993,
            "yoy_linear_growth_rate": -0.1111
        },
        {
            "total_annual_dividend": 0.135,
            "year": 1992,
            "yoy_linear_growth_rate": 0.125
        },
        {
            "total_annual_dividend": 0.12,
            "year": 1991,
            "yoy_linear_growth_rate": 0
        },
        {
            "total_annual_dividend": 0.12,
            "year": 1990,
            "yoy_linear_growth_rate": 0
        },
        {
            "total_annual_dividend": 0.12,
            "year": 1989,
            "yoy_linear_growth_rate": 0.0909
        },
        {
            "total_annual_dividend": 0.11,
            "year": 1988,
            "yoy_linear_growth_rate": 4.5
        },
        {
            "total_annual_dividend": 0.02,
            "year": 1987
        }
    ],
    "backup_stock_price": null,
    "backup_stock_price_date_saved": null,
    "beta": "0.99556273",
    "dividend_payment_months_and_count": {
        "dividend_payment_months": [
            "May",
            "Mar",
            "Nov",
            "Aug"
        ],
        "ttm_dividend_payment_count": 4
    },
    "dividend_yield": "0.0259",
    "five_year_cagr": "0.1638",
    "growth_all_years_of_history": false,
    "industry": "Retail",
    "logo": "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/HD.svg",
    "name": "HOME DEPOT INC",
    "payout_ratios": [
        {
            "net_income_loss": 16433000000,
            "payout_ratio": 4.0163086472342235e-10,
            "year": 2021
        },
        {
            "net_income_loss": 12866000000,
            "payout_ratio": 4.66345406497746e-10,
            "year": 2020
        },
        {
            "net_income_loss": 11242000000,
            "payout_ratio": 4.838996619818538e-10,
            "year": 2019
        },
        {
            "net_income_loss": 11121000000,
            "payout_ratio": 3.7047028144950997e-10,
            "year": 2018
        },
        {
            "net_income_loss": 8630000000,
            "payout_ratio": 4.1251448435689455e-10,
            "year": 2017
        },
        {
            "net_income_loss": 7957000000,
            "payout_ratio": 3.468643961291944e-10,
            "year": 2016
        },
        {
            "net_income_loss": 7009000000,
            "payout_ratio": 3.3670994435725495e-10,
            "year": 2015
        },
        {
            "net_income_loss": 6345000000,
            "payout_ratio": 2.962962962962963e-10,
            "year": 2014
        },
        {
            "net_income_loss": 3338000000,
            "payout_ratio": 2.83028759736369e-10,
            "year": 2010
        }
    ],
    "three_year_cagr": "0.1179",
    "ticker": "HD",
    "type": "common_stock",
    "website": "https://www.homedepot.com/",
    "year_price_high": "347.25",
    "year_price_low": "265.61",
    "years_dividend_growth": "13"
}
  

  const formatWebsite = (url: string) => {
    let returnString: string = url;
    if (url.indexOf("www.")) {
      const startIndex = url.indexOf("www.");
      returnString = url.slice(startIndex, url.length);
    }
    if (returnString.charAt(returnString.length - 1) === "/") {
      returnString = returnString.slice(0,returnString.length - 1);
    }
    return returnString;
  }

  const formatPercent = (string: string) => {
    return Number((Number(string) * 100)).toFixed(2);
  }

  const frequencyFormat = (obj: any) => {
    let months: string = '';
    if (obj.ttm_dividend_payment_count === 4) {
      if (obj.dividend_payment_months.includes('Mar')) {
        months = 'Mar, Jun, Sep, Dec';
      }
      if (obj.dividend_payment_months.includes('Feb')) {
        months = 'Feb, May, Aug, Nov';
      }
      if (obj.dividend_payment_months.includes('Jan')) {
        months = 'Jan, Apr, Jul, Oct';
      }      
    }
    if (obj.ttm_dividend_payment_count === 12) {
      months = 'Monthly';
    }    
    return months
  }

  const findIndicatorPosition = (data: any) => {
    const hi: number = (Number(data.year_price_high) - Number(data.year_price_low));
    const lo: number = (currentPrice - Number(data.year_price_low));
    const position: number = (1 - (lo / hi)) * 100
    return {"right": `${position}%`}
  }

  const compareHiPrice = (annualHi: number) => {
    if (annualHi > currentHi) { return  annualHi.toFixed(2) } 
    else{ return currentHi.toFixed(2); }
  }

  const compareLoPrice = (annualLo: number) => {
    if (annualLo < currentLo) { return annualLo.toFixed(2); }
    else { return currentLo.toFixed(2); }
  }

  const handleBack = () => {
    navigate("/portfolio")  
  }
  
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <>
    <div className='back-button' onClick={handleBack}>          
      <img 
        src={back}         
        alt={'Back to Portfolio'}
      />
    </div>
    <div className='page-title'>Deep Dive</div>
    <div className='deep-dive-flex'>
      <div className='summary-flex'>
        <div className='summary-items'>
          <div className='summary-title'>{ data.ticker } - { data.name }</div>
          <div>{ data.industry }</div>
          <div><a href={ data.website }>{formatWebsite(data.website)}</a></div>
          <div>Current Price: ${currentPrice }</div>
          <div>Year High: ${ compareHiPrice(Number(data.year_price_high)) }</div>
          <div>Year Low: ${ compareLoPrice(Number(data.year_price_low)) }</div>
          <div className='hi-lo-meter-container'>
            <div className='hi-lo-meter-gradient'></div>
            <div className='hi-lo-center-line'></div>
            <div className='current-value-text' style={findIndicatorPosition(data)}>${ currentPrice }</div>
            <div className='current-indicator' style={findIndicatorPosition(data)}></div>
          </div>
        </div>
        <div className='logo-container'>
          <img 
              src={data.logo}         
              alt={`${data.name} Logo`}
              className='info-icon'
            />
        </div>
      </div>
      <div className='more-metrics-flex'>
        
        <div className='metrics-container'>
          <div className='metric-title'>Dividend Yield</div>
          <div className='metric-amount'>{ formatPercent(data.dividend_yield) }%</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>Payout Ratio</div>
          <div> { (data.payout_ratios[0].payout_ratio * 100000000000).toFixed(2)}%</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>3 Year CAGR</div>
          <div> { formatPercent(data.three_year_cagr) }%</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>5 Year CAGR</div>
          <div> { formatPercent(data.five_year_cagr) }%</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>Beta</div>
          <div>{ Number(data.beta).toFixed(3) }</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>Payment Frequency</div>
          <div> { data.dividend_payment_months_and_count.ttm_dividend_payment_count }/Year</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>Payment Months</div>
          <div> { frequencyFormat(data.dividend_payment_months_and_count) }</div>
        </div>
        <div className='metrics-container'>
          <div className='metric-title'>Consistent Growth</div>
          <div>{ data.years_dividend_growth } Years</div>
        </div>
      </div>


      <div className='chart-flex'>
        <div className='annual-dividend-history-chart'>
          <PaymentChart props={data.annual_dividend}/>
        </div>
        <div className='payout-ratio-history-chart'>
          <PayoutChart props={data.payout_ratios}/>
        </div>
      </div>

    </div>
    </>
    </motion.div>
  )
}