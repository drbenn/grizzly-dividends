/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import {  toast } from 'react-toastify';

export interface DeepDiveTicker {
  "ticker": string,
  "amount": number
}
export interface TickerState {
  isLoggedIn: boolean,
  username: string,
  tickers: string[],
  tickerData: any[],
  deepDiveTicker: {},
  profileTickers: DeepDiveTicker[]
}

const initialState: TickerState = {
  isLoggedIn: false,
  username: '',
  tickers: [],
  tickerData: [],
  deepDiveTicker: {},
  profileTickers: []
}


const toastMessage = (message:string) => toast(message);

export const tickerSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    addTicker: (state, action: PayloadAction<string>) => {
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
    removeTicker: (state, action: PayloadAction<string>) => {
      toastMessage(`${action.payload} removed`)
      return {
        ...state,
        tickers: state.tickers.filter((item) => item !== action.payload),
        tickerData: state.tickerData.filter((item) => item?.ticker !== action.payload)
      }      
    },
    addTickerData: (state, action: PayloadAction<any[]>) => {
      return {
        ...state,
        tickerData: [
          action.payload
        ]
      }
      // return {
      //   ...state,
      //   tickerData: [
      //     action.payload,
      //     ...state.tickerData,
      //   ]
      // }
    },
    // TODO - removeTickerData - activate at same time as removeTicker
    updateDeepDiveTicker: (state, action: PayloadAction<any>) => {
      // state.deepDiveTicker.ticker = action.payload.ticker;
      // state.deepDiveTicker.amount = action.payload.amount;
      const current = {...state};
      const deepDive = current.deepDiveTicker
      return {
        ...state,
        deepDiveTicker: action.payload
      }

    },
    updateProfileTickers: (state, action: PayloadAction<DeepDiveTicker>) => {
      // console.log(" in update ProfileTickers");
      // console.log(...state.tickerData);
      // console.log(action);
      const currentProfileTickers = state.profileTickers;
      // console.log(currentProfileTickers);
      state.profileTickers.push(action.payload)
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
export const { addTicker, removeTicker, addTickerData, updateDeepDiveTicker, updateProfileTickers } = tickerSlice.actions

export default tickerSlice.reducer