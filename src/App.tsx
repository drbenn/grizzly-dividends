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
import Detail from './pages/Detail';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <div className='router-view-height'>
        <Routes>
          <Route path='/grizzly' element={<Home />} />
          <Route path='/grizzly/portfolio' element={<Portfolio />} />
          <Route path='/grizzly/detail' element={<Detail />} />
          <Route path='/grizzly/register' element={<Register />} />
          <Route path='/grizzly/login' element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer/>
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
