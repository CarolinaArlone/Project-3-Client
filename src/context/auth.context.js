import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth.services'

const AuthContext = createContext()

const AuthProviderWrapper = (props) => {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        authService
            .verify(token)
            .then(({ data }) => setUser(data))
            .catch(err => console.error('hay un error', err))
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/iniciar-sesion')
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, storeToken, authenticateUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }