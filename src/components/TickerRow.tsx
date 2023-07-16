import { useState } from 'react'
// import hamburger from '/hamburger.svg'
// import logo from '/bear3.png'
import detailIcon from '/line-chart.png'
import close from '/close.png'
import './tickerrow.scss'
import { removeTicker } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'



export default function TickerRow() {    
  const dispatch = useDispatch()
  const [divYield, setDivYield] = useState(0.0255)
  const [amount, setAmount] = useState(100000)
  const [annualDividend, setAnnualDividend] = useState(amount * divYield )

  
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
            MSFT
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
          2.55%
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
          Payout
        </div>
        <div className='cell-detail'>
          55%
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Frequency
        </div>
        <div className='cell-detail'>
          Q (J-M-J-O)          
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Next Dividend
        </div>
        <div className='cell-detail'>
          1/22/24
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Invest By
        </div>
        <div className='cell-detail'>
          12/22/23
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