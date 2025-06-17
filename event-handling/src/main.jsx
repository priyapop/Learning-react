import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Eventprop from './EventsAsProps.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Eventprop />
  </StrictMode>,
)
