import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'

function App() {

  return (

    <>

      <Navigation className='Navigation' />

      <AppRoutes />

      <Footer />

    </>

  )
}

export default App
