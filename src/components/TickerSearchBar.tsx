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
              const name: string = item.name.toLowerCase();
              // return searchTerm && ticker.startsWith(searchTerm)
              return searchTerm && ticker.includes(searchTerm) || searchTerm && name.includes(searchTerm)
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
    </>
  )
}