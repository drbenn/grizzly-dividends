import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import hamburger from '/hamburger.svg'
import logo from '/logo.svg'

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogoutClick = () => {
    alert("User logging out...");
  }
    


  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img 
              src={logo}         
              alt={'Photo of ' + "jabroni"}
              style={{
                width: 32,
                height: 32
              }}
            />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img 
            src={hamburger}         
            alt={'Photo of ' + "jabroni"}
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
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <button onClick={handleLogoutClick}>Logout</button>
            </li>
            <li>
              Logged in user
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}