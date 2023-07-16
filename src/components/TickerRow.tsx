// import { useState } from 'react'
// import hamburger from '/hamburger.svg'
// import logo from '/bear3.png'
import detailIcon from '/line-chart.png'
import './tickerrow.scss'



export default function TickerRow() {    


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
          Yield
        </div>
        <div className='cell-detail'>
          2.55%
        </div>
      </div>
      <div className='cell'>
        <div className='cell-title'>
          Consistent Growth
        </div>
        <div className='cell-detail'>
          8 yrs
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

    </div>

  )
}