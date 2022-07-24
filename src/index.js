import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import { CarsWrapper } from './context/cars.context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

    <Router>
      <AuthProviderWrapper>
        <CarsWrapper>
          <App />
        </CarsWrapper>
      </AuthProviderWrapper>
    </Router>
    
)
