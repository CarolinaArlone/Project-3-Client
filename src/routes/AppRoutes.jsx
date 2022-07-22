import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import BookingPage from '../pages/BookingPage/BookingPage'
import PaymentPage from '../pages/PaymentPage/PaymentPage'
import HomePage from '../pages/HomePage/HomePage'
import CreateCarPage from '../pages/CreateCarPage/CreateCarPage'
import PrivateRoute from './PrivateRoute'
import CarsListPage from '../pages/CarListPage/CarListPage'
import CarEditPage from '../pages/CarEditPage/CarEditPage'







const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/pago" element={<PaymentPage />} />
            <Route path="/mireserva" element={<BookingPage />} />
            <Route path="/miperfil" element={<MyProfilePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/lista-coches" element={<CarsListPage />} />
            <Route path="/editar-coche/:car_id" element={<CarEditPage />} />


            <Route path="/crear" element={<PrivateRoute />}>
                <Route path="" element={<CreateCarPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes