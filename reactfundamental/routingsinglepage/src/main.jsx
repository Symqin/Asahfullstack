import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutingBasic from './routingbasic/RoutingBasic.jsx'
import ReactRouter from './reactroute/ReactRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <ReactRouter />
    </BrowserRouter>
  </StrictMode>,
)
