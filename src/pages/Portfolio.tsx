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

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

export default function Portfolio() {
  const [name, setName] = useState('Mario')
  const [user, setUser] = useState<user | undefined>();
  // const {tickers, setTickers} = useState(['HD','LAND', 'TGT'])
  let tickers = ['HD','LAND', 'TGT']
  const [tickerData, setTickerData] = useState([{}])

  useEffect(() => {
    console.log("useEffect Run");
    fetch("http://localhost:5000/members").then(
      res => res.json()
    ).then(
        data => {
      
      // setTickerData(data);
      console.log(data);
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

  // const getPortfolioData = async () => {
  //   console.log("in getPortfolioData");
    
    // const userData = {
    //   "username": username,
    //   "password": password
    // }
  //   const samplePortfolio = ['HD','LAND', 'TGT']
  //   let sampleString: string = '';
  //   for (let i = 0; i < samplePortfolio.length; i++) {
  //     if (i === samplePortfolio.length - 1) {
  //       sampleString += samplePortfolio[i];
  //     } else {
  //       sampleString += samplePortfolio[i] + ',';
  //     }
  //   }
  //   console.log(sampleString);
  //   try {
  //     const response = await fetch(`http://localhost:5000/portfoliodata?tickers=${sampleString}`, {
  //       method: 'GET',
  //       // headers: {
  //       //   'Content-Type': 'application/json'
  //       // },
  //       // body: JSON.stringify(samplePortfolio)
  //     });
      
  //     // Handle the response from the server as needed
  //     if (response.ok) {
  //       console.log('Ticker data get successful!');
  //       console.log(response);
        
  //       // TODO: GET USER DATA After successful login    
  //       // navigate("/portfolio")    
  //     } else {       
  //       console.error('Ticker data get failed.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  
  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, veniam. Voluptatem recusandae molestias quis quidem vel aspernatur quibusdam debitis vitae?</p>

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
    <button onClick={() => getPortfolioData()}>GET DATA</button>

    <TickerRow></TickerRow>





    
    </motion.div>
  )
}