import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LiftingState } from './components/liftState.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiftingState />
  </StrictMode>
)
