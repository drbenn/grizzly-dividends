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

import { DividendMonthsAndType } from '../types';
import './deepdivemetrics.scss'

export default function DeepDiveMetrics({data}) { 

  const formatPercent = (string: string) => {
    return Number((Number(string) * 100)).toFixed(2);
  }

  const frequencyFormat = (obj: DividendMonthsAndType) => {
    let months: string = '';
    if (obj.ttm_dividend_payment_count === 4) {
      if (obj.dividend_payment_months.includes('Mar')) {
        months = 'Mar, Jun, Sep, Dec';
      }
      if (obj.dividend_payment_months.includes('Feb')) {
        months = 'Feb, May, Aug, Nov';
      }
      if (obj.dividend_payment_months.includes('Jan')) {
        months = 'Jan, Apr, Jul, Oct';
      }      
    }
    if (obj.ttm_dividend_payment_count === 12) {
      months = 'Monthly';
    }    
    return months
  }

  return (
    <> 
      <div className='metrics-container'>
        <div className='metric-title'>Dividend Yield</div>
        <div className='metric-amount'>{ formatPercent(data.dividend_yield) }%</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>Payout Ratio</div>
        <div> { (data.payout_ratios[0].payout_ratio * 100000000000).toFixed(2)}%</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>3 Year CAGR</div>
        <div> { formatPercent(data.three_year_cagr) }%</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>5 Year CAGR</div>
        <div> { formatPercent(data.five_year_cagr) }%</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>Beta</div>
        <div>{ Number(data.beta).toFixed(3) }</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>Payment Frequency</div>
        <div> { data.dividend_payment_months_and_count.ttm_dividend_payment_count }/Year</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>Payment Months</div>
        <div> { frequencyFormat(data.dividend_payment_months_and_count) }</div>
      </div>
      <div className='metrics-container'>
        <div className='metric-title'>Consistent Growth</div>
        <div>{ data.years_dividend_growth } Years</div>
      </div>
    </>
  )
}