/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react'
// import hamburger from '/hamburger.svg'
// import logo from '/bear3.png'
import detailIcon from '/line-chart.png'
import close from '/close.png'
import './tickerrow.scss'
import { removeTicker } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'




export default function TickerRow({...props}) {    
  const dispatch = useDispatch()
  const [divYield, setDivYield] = useState(0.0255)
  const [amount, setAmount] = useState(100000)
  const [annualDividend, setAnnualDividend] = useState(amount * divYield )
  console.log('row props');
  console.log(props);
  
  
  
  function handleRemoveTicker() {
    console.log("handle Removing Ticker MSFT")
    dispatch(removeTicker("MSFT"))
  }



  return (
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
            <input name="tickerAmount" type="number" max={9999999} maxLength={7} value={amount} className="amount-input" onChange={e => setAmount(e.target.value)} />
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Yield
        </div>
        <div className='cell-detail'>
          {props?.props["dividend_yield"]}
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Annual Dividends
        </div>
        <div className='cell-detail'>
          ${new Intl.NumberFormat('en-US').format(annualDividend)}
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Payout Ratio
        </div>
        <div className='cell-detail'>
          {props?.props["payout_ratios"][0]["payout_ratio"]}
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Frequency
        </div>
        <div className='cell-detail'>
          {/* Q (J-M-J-O)           */}
          {props?.props["dividend_payment_months_and_count"]["dividend_payment_months"]}

        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
        5 Yr CAGR
        </div>
        <div className='cell-detail'>
        {props?.props["five_year_cagr"]}
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Growth(Yrs)
        </div>
        <div className='cell-detail'>
        {props?.props["years_dividend_growth"]}
        </div>
      </div>
      <div className='cell'>
        {/* <div className='cell-title'>
          Detail
        </div> */}
        <div className='more-detail-cell'>
        <img 
              src={detailIcon}         
              alt={'More Stock Information'}
            />
        </div>
      </div>
      <div className='cell'>
      <div className='more-detail-cell'>
        <img 
              src={close}         
              alt={'Remove Ticker'}
              onClick={handleRemoveTicker}
            />
        </div>
      </div>

    </div>

  )
}