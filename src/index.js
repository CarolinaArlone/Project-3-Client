import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import { ArrayCarsWrapper } from './context/cars.context'
import Footer from './components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  <Router>
    <AuthProviderWrapper>
      <ArrayCarsWrapper>
        <App />
        <Footer />
      </ArrayCarsWrapper>
    </AuthProviderWrapper>
  </Router>
  // </React.StrictMode>
)

