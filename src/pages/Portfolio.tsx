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
import {v4} from 'uuid';
import TickerSearchBar from '../components/TickerSearchBar';
import { useDispatch } from 'react-redux';
import { addTickerData } from '../redux/tickerSlice'

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

export default function Portfolio() {
  const dispatch = useDispatch()
  const [name, setName] = useState('Mario')
  const [user, setUser] = useState<user | undefined>();
  const [tickerData, setTickerData] = useState([])
  // const {tickers, setTickers} = useState(['HD','LAND', 'TGT'])
  let tickers = ['HD','LAND', 'TGT']

  function handleAddTickerData(data) {
    dispatch(addTickerData(data))
  }

  useEffect(() => {
    console.log("useEffect Run");
    fetch("http://localhost:5000/dataquery", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(["HD", "LAND"])
    }).then(
      res => res.json()
    ).then(
      data => {
      console.log(data);
      setTickerData(data);
      handleAddTickerData(data);
    })
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


    }, []);

  
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Portfolio</h1>
      <TickerSearchBar />

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

    {tickerData?.map((item) => (        
        <TickerRow key={Math.random()} props={item}></TickerRow>      
    ))}
    





    
    </motion.div>
  )
}