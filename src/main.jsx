import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisProvider from './components/layout/LenisProvider'
import { BlueprintProvider } from './context/BlueprintContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LenisProvider>
      <BlueprintProvider>
        <App />
      </BlueprintProvider>
    </LenisProvider>
  </StrictMode>,
)
