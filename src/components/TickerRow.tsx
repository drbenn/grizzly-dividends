/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState, useEffect } from 'react'
import detailIcon from '/line-chart.png'
import close from '/close.png'
import './tickerrow.scss'
import { removeTicker, removeTickerData, updateDeepDiveTicker, updateTickerAmount } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'
import info from '/info.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective-subtle.css';
import { useNavigate } from 'react-router-dom'
import { TickerAmount } from '../types'


const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default function TickerRow({...props}) {    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [divYield, setDivYield] = useState(2)
  const [amount, setAmount] = useState<any>('1000')
  const [annualDividend, setAnnualDividend] = useState(0)
  
  useEffect(() => { 
    const dividendYield = Number(yieldFormat(props?.props["dividend_yield"]))
    setDivYield(dividendYield)
    // console.log('USE EFFECT in ROW');
    const newAnnualDividend = Number(amount) * divYield;
    setAnnualDividend(newAnnualDividend)
    // const ticker: string = props?.props["ticker"];
    // const investAmount: number = Number(amount);
    // dispatch(updateProfileTickers({"ticker":ticker, "amount": investAmount}))
  }, [amount, divYield])


  const handleRemoveTicker = () => {
    dispatch(removeTicker(props?.props["ticker"]))
    dispatch(removeTickerData(props?.props["ticker"]))
  }

  const handleDeepDiveTicker = () => {
    const detailProps = {ticker: props.props.ticker, data: props.props}
    
    dispatch(updateDeepDiveTicker(detailProps))
    navigate("/grizzly/detail")  
  }

  const handleAmountChange = (value: string) => {
    const ticker: string = props?.props["ticker"];
    const investAmount: number = Number(value);
    setAmount(Number(value));
    console.log(`handle row amount changed: ${ticker} / ${investAmount}`);
    const tickerAmount: TickerAmount = {ticker: ticker, amount:investAmount};
    dispatch(updateTickerAmount(tickerAmount))
  }

  const yieldFormat = (num: number) => {
    const divYield =  (Number(num) * 100).toFixed(2)
    return divYield;
  }

  const payoutFormat = (num: number) => {
    return (num * 100).toFixed(2);
  }

  const fiveYrCagrFormat = (num: number) => {
    return (Number(num) * 100).toFixed(2)
  }

  const frequencyFormat = (obj: any) => {
    let frequency: string = '';
    let months: string = '';
    if (obj.ttm_dividend_payment_count === 4) {
      frequency = 'Q';
      if (obj.dividend_payment_months.includes('Mar')) {
        months = '(M,J,S,D)';
      }
      if (obj.dividend_payment_months.includes('Feb')) {
        months = '(F,M,A,N)';
      }
      if (obj.dividend_payment_months.includes('Jan')) {
        months = '(J,A,J,O)';
      }      
    }
    if (obj.ttm_dividend_payment_count === 12) {
      frequency = 'Monthly';
    }    
    return frequency + months
  }

  const preventMinus = (e: any) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};

  return (
    <>
    <div className="row-container">
      <div className='cell'>
        <div className='cell-title'>
          Ticker
        </div>
        <div className='cell-detail'>
          <span className='ticker-symbol'>
            {props?.props["ticker"]}
          </span>
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Amount
        </div>
        <div className='cell-detail'>
            <input
              name="tickerAmount" 
              type="number"
              min={0} max={7} 
              value={amount === 0 ? '' : amount} 
              className="amount-input"
              placeholder={currencyFormat.format(amount)}
              onKeyPress={preventMinus}
              onChange={e => handleAmountChange(e.target.value)} 
            />
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Yield
        </div>
        <div className='cell-detail'>
          {yieldFormat(props?.props["dividend_yield"])}%
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Dividends
        </div>
        <div className='cell-detail'>
          ${new Intl.NumberFormat('en-US').format(annualDividend * 0.01)}/Yr
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Payout Ratio
        </div>
        <div className='cell-detail'>
          {payoutFormat(props?.props["payout_ratios"][0]["payout_ratio"])}%
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Frequency
          <Tippy 
            placement={'top'} 
            arrow={true}
            // animation={'perspective-subtle'} 
            duration={400}
            content={<div className="info-container">
              <div className="title-info">Frequency of Dividend Payments</div>
              <div className="text-info">Monthly - Dividends paid 12 months of the year</div>
              <div className="text-info">Q: Quarterly with payment months of</div>
              <div className='months-info'>(J,A,J,O) = (Jan,Apr,Jul,Oct)</div>    
              <div className='months-info'>(F,M,A,N) = (Feb,May,Aug,Nov)</div>
              <div className='months-info'>(M,J,S,D) = (Mar,Jun,Sep,Dec)</div>        
              </div>}>
          <img 
            src={info}         
            alt={'Payment Frequency Information'}
            className='info-icon'
          />
        </Tippy>
        </div>
        <div className='cell-detail'>
          {frequencyFormat(props?.props["dividend_payment_months_and_count"])}
        </div>
      </div>
      {/* <div className='cell'>
        <div className='cell-title'>
        5 Yr CAGR
        </div>
        <div className='cell-detail'>
        {fiveYrCagrFormat(props?.props["five_year_cagr"])}%
        </div>
      </div> */}
      {/* <div className='cell'>
        <div className='cell-title'>
          Growth
        </div>
        <div className='cell-detail'>
        {props?.props["years_dividend_growth"]} Yrs
        </div>
      </div> */}
      <div className='chart-cell'>
        <div className='more-detail-cell'>
          <img 
            src={detailIcon}         
            alt={'More Stock Information'}
            onClick={handleDeepDiveTicker}
          />
        </div>
      </div>
      <div className='close-cell'>
        <div className='close-detail-cell'>
          <img 
            src={close}         
            alt={'Remove Ticker'}
            onClick={handleRemoveTicker}
          />
        </div>
      </div>

    </div>
    </>
  )
}