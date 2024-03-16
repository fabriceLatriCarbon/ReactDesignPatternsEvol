import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'// import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";


import './index.css'
import App from './App'
import Navbar from '@ui/navigation/NavBar';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Navbar />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
