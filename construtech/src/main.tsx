import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RoutesApp } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>,
)
