import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './styles/global.css'
import { TaskProvider } from './contexts/tasks.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)
