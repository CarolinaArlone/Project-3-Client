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
<<<<<<< HEAD
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
        <Footer />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
=======
  <Router>
    <AuthProviderWrapper>
      <ArrayCarsWrapper>
        <App />
        <Footer />
      </ArrayCarsWrapper>
    </AuthProviderWrapper>
  </Router>
>>>>>>> cb66de327ead50558edf3a63ddb9719225df7778
)

