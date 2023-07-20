import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import NoMatch from './pages/Nomatch'
import { Counter } from './pages/Counter';
import Detail from './pages/Detail';


function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='detail' element={<Detail />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='counter' element={<Counter />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light" // switch between themes of light, dark and colored
      />
    </>
  )
}

export default App
