import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutingBasic from './routingbasic/RoutingBasic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutingBasic />
  </StrictMode>,
)
