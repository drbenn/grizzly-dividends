/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import './tickersearchbar.scss'
import { useState, useEffect } from 'react'
import { addTicker } from '../redux/tickerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { SearchTickers } from '../types'


export default function TickerSearchBar() {    
  const dispatch = useDispatch();
  const searchTickersFromState = useSelector((state: RootState) => state.store.navSearchTickers);
  const [searchTicker, setSearchTicker] = useState('');
  const [searchTickerBank, setSearchTickerBank] = useState<SearchTickers[]>();
  // const [chartColors,setChartColors] = useState(['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#D47', '#6A0', '#B82E2E', '#316395', '#949', '#2A9', '#AA1', '#63C', '#E67300', '#8B0707', '#329262', '#5574A6', '#651067'])

  // const chartColors2 = ['#70d6ff','#ff70a6','#ff9770','#ffd670','#e9ff70','#333745','#e63462','#fe5f55','#c7efcf','#eef5db', '#70d6ffbf','#ff70a6bf','#ff9770bf','#ffd670bf','#e9ff70bf','#333745bf','#e63462bf','#fe5f55bf','#c7efcfbf','#eef5dbbf', '#70d6ff80','#ff70a680','#ff977080','#ffd67080','#e9ff7080','#33374580','#e6346280','#fe5f5580','#c7efcf80','#eef5db80']

  function handleAddTicker() {
    dispatch(addTicker(searchTicker.toUpperCase()));
    setSearchTicker('');
  }

  function handleSearchInput(value:string) {
    setSearchTicker(value);
  }

  function onSearch(searchTerm:string) {
    setSearchTicker(searchTerm);
  }
  
  const inputStyle: object = {
    "textTransform": 'uppercase',
  }

  useEffect(() => {
    setSearchTickerBank(searchTickersFromState);
  }, [searchTickersFromState]);
  return (
    <>
      <div className="search-container">
        <div className='search-and-dropdown-flex'>
          <div>
            <input 
            type="text" 
            value={searchTicker} 
            maxLength={10} 
            className='user-input' 
            placeholder="Seach Tickers ex. 'MSFT'" 
            onChange={e => handleSearchInput(e.target.value)} 
            style={inputStyle}
            />
          </div>
          <div className='dropdown'>
            {searchTickerBank?.filter((item) => {
              const searchTerm: string = searchTicker?.toLowerCase();
              const ticker: string = item.ticker.toLowerCase();
              return searchTerm && ticker.startsWith(searchTerm)
            })
            // .slice(0,10)
            .map((item) => {
                return (
                  <div key={Math.random()} onClick={()=>onSearch(item.ticker)}className='dropdown-row'>{item.ticker} - {item.name}</div>
            )})}
          </div>

        </div>
        <div>
          <button className='add-button' onClick={handleAddTicker}>Add Ticker</button>
        </div>
      </div>
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
    </>
  )
}