/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import hamburger from '/hamburger.svg'
import logo from '/bear3.png'

import { SearchTickers } from '../types'
import { addSearchTickers } from '../redux/tickerSlice'
import { useDispatch } from 'react-redux'
// import logo from '/logo.svg'


export default function Navbar() {
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogoutClick = () => {
    alert("User logging out...");
  }
    
  useEffect(() => {
    fetch("http://localhost:5000/searchtickers", {
      method: 'GET'
    }).then(
      res => res.json()
    ).then(
      data => {
        const dataToSearchTickers: SearchTickers[] = data.map((item:[string,string]) => {
          return {"ticker": item[0], "name":item[1]}
        })
        dataToSearchTickers.sort((a,b) => a.ticker.localeCompare(b.ticker) );
        dispatch(addSearchTickers(dataToSearchTickers));
    })
  }, []);


  return (
    <nav className="navbar">
        
        <div className='nav-logo-container'>
        <NavLink to="/">
          <div className="logo">
          <img 
            src={logo}         
            alt={'Grizzly Logo'}
          />
          </div>
          </NavLink>
          <div className='nav-site-title'>
            GRIZZLY DIVIDENDS
          </div>
        </div>
        

        
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img 
            src={hamburger}         
            alt={'Mobile Hamburger Menu'}
            style={{
              width: 32,
              height: 32
            }}
          />

        </div>
        <div className={`nav-elements  ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            {/* <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li> */}
          </ul>
        </div>
    </nav>
  )
}