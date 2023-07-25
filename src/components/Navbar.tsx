/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import hamburger from '/hamburger.svg'
import logo from '/bear3.png'
import { addSearchTickers } from '../redux/tickerSlice'
// import logo from '/logo.svg'


export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogoutClick = () => {
    alert("User logging out...");
  }
    
  useEffect(() => {
    console.log("useEffect NAV Run and add search tickers to state");
    fetch("http://localhost:5000/searchtickers", {
      method: 'GET'
    }).then(
      res => res.json()
    ).then(
      data => {
        addSearchTickers(data);
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