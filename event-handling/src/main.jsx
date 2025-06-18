import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Eventprop from './EventsAsProps.jsx'
import Toolbar from './EventsAsProps.jsx'
import Tool from './EventPropagation.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tool />
  </StrictMode>,
)
