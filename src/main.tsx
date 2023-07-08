import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // document.getElementById('root'),
);

// reportWebVitals(console.log);
