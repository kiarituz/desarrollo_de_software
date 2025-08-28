import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MiBoton from './components/Componente1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
    <MiBoton /> 
  </StrictMode>,
)
