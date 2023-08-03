/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-return */
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
import GrowthChart from './GrowthChart';
import { useNavigate } from 'react-router-dom';
import { TickerDetail } from '../types';
import DeepDiveMetrics from './DeepDiveMetrics';
import DeepDiveSummary from './DeepDiveSummary';


export default function DeepDive() { 
  const navigate = useNavigate();
  const deepDiveData = useSelector((state: RootState) => state.store.deepDiveTicker)
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [currentHi, setCurrentHi] = useState<number>(0);
  const [currentLo, setCurrentLo] = useState<number>(0);
  const [ticker, setTicker] = useState<string>("");
  const [data, setData] = useState<TickerDetail>();

  const handleBack = () => {
    navigate("/grizzly/portfolio")  
  }
  
  useEffect(() => {
    setTicker(deepDiveData["ticker"]);
    setData(deepDiveData["data"])   

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
  }, [ticker, deepDiveData]);

  if (!data) return null; // prevents page render until state data is available

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

    <div className='page-title'>{ticker} Detail</div>
    <div className='deep-dive-flex'>

      <div className='summary-flex'>
        <DeepDiveSummary data={data} currentPrice={currentPrice} currentHi={currentHi} currentLo={currentLo} />
      </div>

      <div className='more-metrics-flex'>
        <DeepDiveMetrics data={data}/>
      </div>

      <div className='chart-flex'>
        <div className='annual-dividend-history-chart'>
          <PaymentChart props={data.annual_dividends}/>
        </div>
        <div className='annual-growth-history-chart'>
          <GrowthChart props={data.annual_dividends}/>
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