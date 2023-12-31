/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';
import { SearchTickers, TickerAmount, TickerDetail, User } from '../types';

export interface DeepDiveTicker {
  "ticker": string,
  "amount": number
}
export interface TickerState {
  isLoggedIn: boolean,
  username: string,
  tickers: string[],
  tickerData: any[],
  deepDiveTicker: any,
  profileTickers: DeepDiveTicker[],
  navSearchTickers: SearchTickers[],
}

const initialState: TickerState = {
  isLoggedIn: false,
  username: '',
  tickers: [],
  tickerData: [],
  deepDiveTicker: {},
  profileTickers: [],
  navSearchTickers: [],
  // profileTickers: [{ticker: "HD", amount: 2000}, {ticker: "LAND", amount: 1300}]
}

const toastMessage = (message:string) => toast(message);

export const tickerSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        isLoggedIn: action.payload["loggedIn"],
        username: action.payload["username"]
      }
    },
    userLogout: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoggedIn: action.payload
      }
    },
    addTicker: (state, action: PayloadAction<any>) => {
      const current = {...state};
      const tickers = current.tickers
      if (!tickers) {
        tickers.push(action.payload)
      } else {
        tickers.includes(action.payload) ? current : tickers.push(action.payload)
      }
      // return {
      //   ...state,
      //   tickers: [
      //     action.payload,
      //     ...state.tickers,
      //   ]
      // }
    },
    addSearchTickers: (state, action: PayloadAction<SearchTickers[]>) => {
      return {
        ...state,
        navSearchTickers: 
          action.payload
      }
    },
    removeTicker: (state, action: PayloadAction<string>) => {
      toastMessage(`${action.payload} removed`)
      return {
        ...state,
        tickers: state.tickers.filter((item) => item !== action.payload),
        
      }      
    },
    removeTickerData: (state, action: PayloadAction<string>) => {
      return {...state, tickerData: state.tickerData.filter((ticker) => ticker["ticker"] !== action.payload)}
    },
    addTickerData: (state, action: PayloadAction<TickerDetail[]>) => {
      // state.tickerData = [...state.tickerData, action.payload];
      return {
        ...state,
        tickerData: 
          action.payload
      }

    },
    updateTickerAmount: (state, action: PayloadAction<TickerAmount>) => {
      return {
        ...state,
        tickerData: state.tickerData.map((item) => {
          if (item.ticker === action.payload.ticker) {
            return {...item, amount: action.payload.amount}
          } 
          if (item.ticker !== action.payload.ticker) {
            return {...item}
          } 
        }),
      }
    },
    // TODO - removeTickerData - activate at same time as removeTicker
    updateDeepDiveTicker: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        deepDiveTicker: action.payload
      }

    },
    addProfileTicker: (state, action: PayloadAction<any>) => {
      const current = {...state};
      const pTickers = current.profileTickers
      if (!pTickers) {
        pTickers.push(action.payload)
      } else {
        
        pTickers.includes(action.payload) ? current : pTickers.push(action.payload)
      }

    },
    updateProfileTickers: (state, action: PayloadAction<DeepDiveTicker>) => {
      // console.log("ACTION PAYLOAD");
      // console.log(action.payload);
      
      
      // const current = {...state};
      // const tickers = current.profileTickers
      // const newArray = tickers.slice()
      // console.log(action.payload)
      // console.log("TICKERS?");
      // console.log(tickers);
      // console.log(newArray);
      
      
      
      // if (!tickers) {
      //   // tickers.push(action.payload)
      //   return {
      //     ...state,
      //     profileTickers: [
      //       action.payload
      //     ]
      //   }
      // } 
      // if (tickers) {
      //   const index = tickers.findIndex(item => item.ticker === action.payload)
      //   // console.log("INDEX");
      //   // console.log(index);
        
        
      //   if (index === -1) {
      //     tickers.push(action.payload)
      //   } 
      //   else {
      //     tickers[index] = action.payload
      //   }
      // }


      // const currentProfileTickers = state.profileTickers;
      // state.profileTickers.push(action.payload)


      // console.log(" in update ProfileTickers");
      // console.log(...state.tickerData);
      // console.log(action);
      // console.log(currentProfileTickers);
      // state.profileTickers.findIndex(action.payload.ticker === )

      
    }
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { userLogin, userLogout, addTicker, addSearchTickers, removeTicker, removeTickerData, addTickerData, updateTickerAmount, updateDeepDiveTicker, addProfileTicker, updateProfileTickers } = tickerSlice.actions

export default tickerSlice.reducer