import { useState } from 'react'
import './tickersearchbar.scss'
import { addTicker } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'


export default function TickerSearchBar() {    
  const dispatch = useDispatch()
  const [searchTicker, setSearchTicker] = useState('')

  function handleAddTicker() {
    dispatch(addTicker(searchTicker))
  }

  return (
    <div className="search-container">
      <input type="text" maxLength={10} className='user-input' placeholder="Seach Tickers ex. 'MSFT'" onChange={e => setSearchTicker(e.target.value)}/>
      <button className='add-button' onClick={handleAddTicker}>Add Ticker</button>
    </div>
  )
}