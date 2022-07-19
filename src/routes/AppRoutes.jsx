import { Routes, Route } from 'react-router-dom'
import SignupPage from './../pages/SignupPage/SignupPage'
import LoginPage from './../pages/LoginPage/LoginPage'

const AppRoutes = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetails />} /> */}
            <Route path="/registro" element={<SignupPage />} />
            <Route path="/iniciar-sesion" element={<LoginPage/>} />
        </Routes>
    )
}

export default AppRoutes