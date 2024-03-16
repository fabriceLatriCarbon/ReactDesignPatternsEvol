import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'// import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";


import './index.css'
import App from './App'
import Navbar from '@ui/navigation/NavBar';
import AppThemeProvider from '@commonContexts/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppThemeProvider>
        <Router>
          <Navbar />
          <App />
        </Router>
      </AppThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
