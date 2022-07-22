import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (

    <>

      <Navigation className='Navigation' />

      <AppRoutes />

    </>

  )
}

export default App
