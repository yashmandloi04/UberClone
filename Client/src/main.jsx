import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import UserContextProvider from './Context/UserContext.jsx'
import CaptainProvider from './Context/CaptainContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <CaptainProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainProvider>
    </UserContextProvider>
  </StrictMode>
)
