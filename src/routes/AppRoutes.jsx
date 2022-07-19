import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import BookingPage from '../pages/BookingPage/BookingPage'
import PaymentPage from '../pages/PaymentPage/PaymentPage'
import HomePage from '../pages/HomePage/HomePage'


const AppRoutes = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetails />} /> */}
            <Route path="/pago" element={<PaymentPage />} />
            <Route path="/mireserva" element={<BookingPage />} />
            <Route path="/miperfil" element={<MyProfilePage />} />
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes