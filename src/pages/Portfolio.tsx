/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import TickerRow from '../components/TickerRow';
import TickerSearchBar from '../components/TickerSearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { addProfileTicker, addTickerData } from '../redux/tickerSlice'
import { RootState } from '../redux/store';
import {  toast } from 'react-toastify';
import SummaryDashboard from '../components/summaryDashboard';
import DeepDive from '../components/DeepDive';
import { TickerDetail } from '../types';

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

export default function Portfolio() {
  const dispatch = useDispatch();
  const portfolioTickers = useSelector((state: RootState) => state.store.tickers);
  // const profileTickers = useSelector((state: RootState) => state.store.profileTickers);
  const [tickerData, setTickerData] = useState<TickerDetail[]>([]);
  const [tickersToast, setTickersToast] = useState<string[]>([]);
  const [tickerCount, setTickerCount] = useState<number>(0);
  


  function handleAddTickerData(data:TickerDetail[]) {
    dispatch(addTickerData(data))
    // console.log(data);
    // data.forEach((item) => {
    //   const profileTicker = {"ticker": item.ticker, "amount":1000};
    //   dispatch(addProfileTicker(profileTicker))
    // })

  }
  const toastMessage = (message:string) => toast(message);

  // TODO: Leave/update for potenetial use in future when loading multiple tickers from profile on first load
  // const tickerNamesForToast = (data) => {
  //   let tickerDisplay:string = '';
  //   data.forEach((item) => {
  //     if (data.length === 1) {
  //       tickerDisplay += item.ticker;
  //     }
  //     if (data.length > 1) {
  //       if (item[data.length - 1]) {
  //         tickerDisplay += item.ticker;
  //       } else {
  //         tickerDisplay += item[data.length] + ', ';
  //       }
  //     }
  //   })
  //   return tickerDisplay;
  // }
  // if (!portfolioTickers) return null; // prevents page render until state data is available

  useEffect(() => {
    console.log(portfolioTickers); 
    setTickerCount(portfolioTickers.length);
    if (portfolioTickers.length > 0) {
      console.log("useEffect Run");
      fetch("http://localhost:5000/dataquery", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(portfolioTickers)
      }).then(
        res => res.json()
      ).then(
        data => {
        // console.log("portfolio data response");
        // console.log(data);
        if (!data.length) {
          toastMessage(`Ticker not available, search for a different ticker`);
        }
        if (data.length) {
          // const retrievedNames = tickerNamesForToast(data);
          setTickerData(data);
          data.forEach(item => {
            if (!tickersToast.includes(item.ticker)) {
              toastMessage(`${item.ticker} added`)
              handleAddTickerData(data);
              setTickersToast([...tickersToast, item.ticker])
            }
          });
        }
      })
    } 
  }, [portfolioTickers]);

  
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <div className='page-title'>Portfolio</div>
    <TickerSearchBar />
    <SummaryDashboard />


    {tickerCount > 0 && tickerData?.map((item) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={Math.random()}
      >        
      <TickerRow key={Math.random()} props={item}></TickerRow>  
      </motion.div>    
    ))}


    </motion.div>
  )
}