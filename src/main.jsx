import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisProvider from './components/layout/LenisProvider'
import { SpatialProvider } from './context/SpatialContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <SpatialProvider>
        <App />
      </SpatialProvider>
    </LenisProvider>
  </StrictMode>,
)
