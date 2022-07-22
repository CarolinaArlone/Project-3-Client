import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import { CarsWrapper } from './context/cars.context'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
// <<<<<<< HEAD
//   // <React.StrictMode>
// <<<<<<< HEAD
//     <Router>
//       <AuthProviderWrapper>
//         <CarsWrapper>
//         <App />
//         <Footer />
//           </CarsWrapper>
// =======
  <Router>
    <AuthProviderWrapper>
      <CarsWrapper>
        <App />
        <Footer />
      </CarsWrapper>
    </AuthProviderWrapper>
  </Router>
  {/* // </React.StrictMode>
=======
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <CarsWrapper>
          <App />
          <Footer />
        </CarsWrapper>
>>>>>>> 869ed955f01d07e8410b490ed755ea24f93bc0d9
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
>>>>>>> 5e881d03cb4b13f80c37a1ae3b257dda00a42ed6 */}
)

