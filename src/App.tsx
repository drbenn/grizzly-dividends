import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import NoMatch from './pages/Nomatch'
import CalcPage from './pages/CalcPage';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='calc' element={<CalcPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
