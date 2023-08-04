/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import TickerRow from '../components/TickerRow';
import TickerSearchBar from '../components/TickerSearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { addTickerData } from '../redux/tickerSlice'
import { RootState } from '../redux/store';
import {  toast } from 'react-toastify';
import SummaryDashboard from '../components/summaryDashboard';
import { TickerDetail } from '../types';
import { dataQueryPath } from '../paths';
import Footer from '../components/Footer';

// interface user {
//   map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
//   name: string;
//   email: string;
//   phone: number;
// }

export default function Portfolio() {
  const dispatch = useDispatch();
  const portfolioTickers = useSelector((state: RootState) => state.store.tickers);
  // const profileTickers = useSelector((state: RootState) => state.store.profileTickers);
  const [tickerData, setTickerData] = useState<TickerDetail[]>([]);
  const [tickersToast, setTickersToast] = useState<string[]>([]);
  const [tickerCount, setTickerCount] = useState<number>(0);
  // const [allDataShown, setAllDataShown] = useState<boolean>(false)
  


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

  // function tickersToFetchFilter(tickers: string[]) {
  //   // console.log(`tickers in tickers to fetch func: ${tickers}`);
  //   // console.log("tickerdata to check against thats already loaded/iterated over in page");
  //   // console.log(tickerData);
  //   const newTickersToFetch: string[] = []; //
  //   tickers.forEach((ticker)=> {
  //     // console.log(ticker);
  //     const found = tickerData.find((obj) => obj.ticker === ticker)
  //     if (!found) {newTickersToFetch.push(ticker)}
  //     // console.log("FOUND");
  //     // console.log(found);
      
      
      
  //   })
  //   // console.log('newTickersToFetch');
  //   // console.log(newTickersToFetch);
    
    
  //   return tickers // TODO: still need to fix
    
  // }

  function transformJsonData(data: any) {
    const mappedJson = data.map(item => ({
      ...item,
       annual_dividends: JSON.parse(item.annual_dividends),
       dividend_payment_months_and_count: JSON.parse(item.dividend_payment_months_and_count),
       payout_ratios: JSON.parse(item.payout_ratios)
      }))
    return mappedJson;
  }

  useEffect(() => {
    console.log(portfolioTickers); 
    setTickerCount(portfolioTickers.length);
    if (portfolioTickers.length > 0) {
      console.log(`tickers in dataQuery ${portfolioTickers}`);
      // const newTickersToFetch = tickersToFetchFilter(portfolioTickers);



      fetch(dataQueryPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(portfolioTickers)
      }).then(
        res => res.json()
      ).then(
        data => {
        const jsonData = JSON.parse(data["data"]);
        const mappedJsonData = transformJsonData(jsonData);
        console.log(mappedJsonData);
        
        if (!mappedJsonData.length) {
          toastMessage(`Ticker not available, search for a different ticker`);
        }
        if (mappedJsonData.length) {
          // const retrievedNames = tickerNamesForToast(data);
          setTickerData([...mappedJsonData]);
          mappedJsonData.forEach(item => {
            if (!tickersToast.includes(item.ticker)) {
              toastMessage(`${item.ticker} added`)
              handleAddTickerData(mappedJsonData);
              setTickersToast([...tickersToast, item.ticker])
            }
          });
        }
      })
      // portfolioTickers.length === tickerData.length ? setAllDataShown(true) : setAllDataShown(false)
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
    <SummaryDashboard />
    <TickerSearchBar />



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