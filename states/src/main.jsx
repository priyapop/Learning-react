import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { DeriveState } from './components/derivedstate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeriveState />
  </StrictMode>,
)
