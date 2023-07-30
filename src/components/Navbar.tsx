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
import logout from '/logout.png'

import { SearchTickers } from '../types'
import { addSearchTickers, userLogout } from '../redux/tickerSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
// import logo from '/logo.svg'


export default function Navbar() {
  const dispatch = useDispatch();
  const isUserLoggedInState = useSelector((state: RootState) => state.store.isLoggedIn);
  const loggedInUser = useSelector((state: RootState) => state.store.username);
  const [showNavbar, setShowNavbar] = useState(false);
  const [areSearchTickersReceived, setAreSearchTickersReceived] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogoutClick = () => {
    // alert("User logging out...");
    setIsLoggedIn(false);
    dispatch(userLogout(false));
  }
    
  useEffect(() => {  
    setIsLoggedIn(isUserLoggedInState);
    setUsername(loggedInUser)
    if (!areSearchTickersReceived) {
      fetch("http://localhost:3000/searchtickers", {
        method: 'GET'
      }).then(
        res => res.json()
      ).then(
        data => {          
          const dataToSearchTickers: SearchTickers[] = data.map((item:{ticker:string, name: string}) => {
            return {"ticker": item.ticker, "name":item.name}
          })          
          dataToSearchTickers.sort((a,b) => a.ticker.localeCompare(b.ticker) );
          dispatch(addSearchTickers(dataToSearchTickers));
          if (dataToSearchTickers.length > 0) {
            setAreSearchTickersReceived(true)
          }
      })
    }

  }, [isUserLoggedInState, isLoggedIn, loggedInUser]);


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
            {!isLoggedIn && 
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            }
            {!isLoggedIn &&
            <li>
              <NavLink to="/login">Log In</NavLink>
            </li>           
            }
            {isLoggedIn &&
            <li>
              <div className='logout-flex' onClick={handleLogoutClick}>
                <div className='logout-text'>Logout</div>
                <div>
                  <img 
                    src={logout}         
                    alt={'User Logout'}
                    style={{
                    width: 18,
                    height: 18
                  }}
                  />
                </div>
              </div>
            </li>
            }
            {isLoggedIn &&
            <li className='login-user-icon'>
              {username.slice(0,1).toUpperCase()}
            </li>
            }
          </ul>
        </div>
    </nav>
  )
}