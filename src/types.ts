// https://www.youtube.com/watch?v=zu-EgnbmcLY
// dont use .d.ts for types file

import { combineReducers } from '@reduxjs/toolkit';
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

export type BookState = {
  id: string;
  title: string | undefined;
  author: string | undefined;
};

export type DividendMonthsAndType = {
  dividend_payment_months: string[];
  ttm_dividend_payment_count: number;
}

export type PayoutRatios = {
  net_income_loss: number;
  payout_ratio: number;
  year: number;
}

export type AnnualDividend = {
  total_annual_dividend: number;
  year: number;
  yoy_linear_growth_rate: number;
}

export type TickerAmount = {
  ticker: string;
  amount: number;
}

export type SummaryChart = {
  ticker: string;
  amount: number;
  yield: number;
  payMonths: string[];
}

export type ChartJsSummaryData = {
  backgroundColor: string;
  data: number[];
  label: string;
}

export type SearchTickers = {
  ticker: string;
  name: string;
}

export type TickerDetail = {
  ticker: string;
  name: string;
  type: string;
  industry: string;
  website: string;
  logo: string;
  dividend_yield: string;
  years_dividend_growth: string;
  growth_all_years_of_history: boolean; 
  payout_ratios: PayoutRatios[];
  three_year_cagr: string;
  five_year_cagr: string;
  year_price_high: string;
  year_price_low: string;
  beta: string;
  backup_stock_price: string;
  backup_stock_price_date_saved: string;
  dividend_payment_months_and_count: DividendMonthsAndType;
  annual_dividend: AnnualDividend[];
  amount?: number;
}