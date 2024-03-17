import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'// import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";

import App from './App'
import AppThemeProvider from '@commonContexts/theme';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppThemeProvider>
        <Router>
          <App />
        </Router>
      </AppThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
