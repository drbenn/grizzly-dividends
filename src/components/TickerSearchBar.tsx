import { useState } from 'react'
import './tickersearchbar.scss'
import { addTicker } from '../redux/tickerSlice'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'



export default function TickerSearchBar() {    
  const dispatch = useDispatch()
  const stateTickers = useSelector((state: RootState) => state.tickers.value)

  const [searchTicker, setSearchTicker] = useState('')
  const [displayTickers, setTickers] = useState()

  function handleAddTicker() {
    console.log(searchTicker)
    dispatch(addTicker(searchTicker))
  }

  return (
    <div className="search-container">
      <input type="text" maxLength={10} className='user-input' placeholder="Seach Tickers ex. 'MSFT'" onChange={e => setSearchTicker(e.target.value)}/>
      <button className='add-button' onClick={handleAddTicker}>Add Ticker</button>
    </div>

  )
}