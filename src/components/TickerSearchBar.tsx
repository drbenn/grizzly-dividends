import { useState } from 'react'
import './tickersearchbar.scss'
import { addTicker } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'


export default function TickerSearchBar() {    
  const dispatch = useDispatch()
  const [searchTicker, setSearchTicker] = useState('')
  const [chartColors,setChartColors] = useState(['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#D47', '#6A0', '#B82E2E', '#316395', '#949', '#2A9', '#AA1', '#63C', '#E67300', '#8B0707', '#329262', '#5574A6', '#651067'])

  const chartColors2 = ['#70d6ff','#ff70a6','#ff9770','#ffd670','#e9ff70','#333745','#e63462','#fe5f55','#c7efcf','#eef5db', '#70d6ffbf','#ff70a6bf','#ff9770bf','#ffd670bf','#e9ff70bf','#333745bf','#e63462bf','#fe5f55bf','#c7efcfbf','#eef5dbbf', '#70d6ff80','#ff70a680','#ff977080','#ffd67080','#e9ff7080','#33374580','#e6346280','#fe5f5580','#c7efcf80','#eef5db80']

  function handleAddTicker() {
    dispatch(addTicker(searchTicker.toUpperCase()))
  }
  
  const inputStyle = {
    "textTransform": 'uppercase',
  }
  return (
    <div className="search-container">
      <input type="text" maxLength={10} className='user-input' placeholder="Seach Tickers ex. 'MSFT'" onChange={e => setSearchTicker(e.target.value)} style={inputStyle}/>
      <button className='add-button' onClick={handleAddTicker}>Add Ticker</button>
      {/* {chartColors.map((item) => {
        return (
          <div className='color-test' style={{backgroundColor:`${item}`}}
          >
          {item}
        </div>
      )})} */}
      {/* {chartColors2.map((item) => {
        return (
          <div className='color-test' style={{backgroundColor:`${item}`}}
          >
          {item}
        </div>
      )})} */}




    </div>
  )
}