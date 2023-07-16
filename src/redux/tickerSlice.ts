import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import {  toast } from 'react-toastify';

export interface TickerState {
  isLoggedIn: boolean,
  username: string,
  tickers: string[],
  tickerData: any[],
}

const initialState: TickerState = {
  isLoggedIn: false,
  username: '',
  tickers: [],
  tickerData: []
}


const toastMessage = (message:string) => toast(message);

export const tickerSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    addTicker: (state, action: PayloadAction<string>) => {
      toastMessage(`${action.payload} added`)
      return {
        ...state,
        tickers: [
          action.payload,
          ...state.tickers,
        ]
      }
    },
    removeTicker: (state, action: PayloadAction<string>) => {
      toastMessage(`${action.payload} removed`)
      return {
        ...state,
        tickers: state.tickers.filter((item) => item !== action.payload)
      }      
    },
    addTickerData: (state, action: PayloadAction<any[]>) => {
      return {
        ...state,
        tickerData: [
          action.payload,
          ...state.tickerData,
        ]
      }
    },
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
export const { addTicker, removeTicker, addTickerData } = tickerSlice.actions

export default tickerSlice.reducer