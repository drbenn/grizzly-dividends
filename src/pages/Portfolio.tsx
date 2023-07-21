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
import { addTickerData } from '../redux/tickerSlice'
import { RootState } from '../redux/store';
import {  toast } from 'react-toastify';
import SummaryDashboard from '../components/summaryDashboard';
import DeepDive from '../components/DeepDive';

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

export default function Portfolio() {
  const dispatch = useDispatch()
  const portfolioTickers = useSelector((state: RootState) => state.store.tickers)
  const [name, setName] = useState('Mario')
  const [user, setUser] = useState<user | undefined>();
  const [tickerData, setTickerData] = useState([])
  const [tickersToast, setTickersToast] = useState<string[]>([])
  const [state, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [tickerCount, setTickerCount] = useState(0)
  // let tickers = ['HD','LAND', 'TGT']

  function handleAddTickerData(data) {
    dispatch(addTickerData(data))
  }
  const toastMessage = (message:string) => toast(message);

  const tickerNamesForToast = (data) => {
    let tickerDisplay:string = '';
    data.forEach((item) => {
      if (data.length === 1) {
        tickerDisplay += item.ticker;
      }
      if (data.length > 1) {
        if (item[data.length - 1]) {
          tickerDisplay += item.ticker;
        } else {
          tickerDisplay += item[data.length] + ', ';
        }
      }
    })
    return tickerDisplay;
  }
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
        console.log("portfolio data response");
        console.log(data);
        if (!data.length) {
          toastMessage(`Ticker not available, search for a different one`);
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
    // if (portfolioTickers.length === 0) {forceUpdate()}
    // if (portfolioTickers.length === 0 || portfolioTickers === undefined) {
    //   setTickerData([]);
    // }
    // console.log(name)
    // // fetch('https://jsonplaceholder.typicode.com/users')
    // //   .then((response) => response.json())
    // //   .then((json) => setUser(json));

    // let sampleString: string = '';
    // console.log(tickers);
    
    // if (tickers) {
    //   console.log("IN TICKERS IF");
      
    //   for (let i = 0; i < tickers.length; i++) {
    //     if (i === tickers.length - 1) {
    //       sampleString += tickers[i];
    //     } else {
    //       sampleString += tickers[i] + ',';
    //     }
    //   }


    
    
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
      {/* <SummaryDashboard /> */}
      <TickerSearchBar />
      {name}
      {portfolioTickers}

      {/* <div className="p-2">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item) => (
            <tr key={Math.random()}>
              <th scope="row" key={Math.random()}>{item.id}</th>
              <td key={Math.random()}>{item?.name}</td>
              <td key={Math.random()}>{item?.email}</td>
              <td key={Math.random()}>{item?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> */}
    <button onClick={() => name === "Mario" ? setName("Luigi") : setName("Mario")}>Change Name</button>

    {tickerCount > 0 && tickerData?.map((item) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >        
        <TickerRow key={Math.random()} props={item}></TickerRow>  
        </motion.div>    
    ))}
    
      
    
    </motion.div>
  )
}