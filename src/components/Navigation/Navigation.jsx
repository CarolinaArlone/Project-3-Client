import { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import Loader from '../Loader/Loader'
import Logo from './../Logo/Logo'
import './Navigation.css'


const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const logout = () => {
        logoutUser()
    }

    const isAdmin = () => {
        if (user?.role === 'ADMIN') {
            return (
                <>
                    <Nav.Link className="text-decoration-none" href='/crear'>Crear coche</Nav.Link>
                    <Nav.Link className="text-decoration-none" href='/lista-coches'>Lista coches</Nav.Link>
                </>
            )
        }
    }

    return (
        <Navbar className='Navigation' collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href='/' ><img className="navLogo" src='\logo_white.png' alt="Te Llevo logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ms-auto navbar-option aux">

                    {isAdmin()}
                    {
                        !user
                            ?
                            <>
                                <Nav.Link className="first-anchor text-decoration-none" href='/registro'>Únete</Nav.Link>
                                <Nav.Link className="text-decoration-none" href='/iniciar-sesion' as="span">Iniciar sesión</Nav.Link>
                            </>
                            :
                            <>
                                <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="text-decoration-none" href={`/miperfil/${user._id}`}>Perfil de {user.username}</NavDropdown.Item>
                                    {/* <Link to='/mireserva'><NavDropdown.Item as="span">Mi reserva</NavDropdown.Item></Link> */}
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>Cerrar sesión</NavDropdown.Item>
                                </NavDropdown>
                            </>
                    }
                </Nav>

            </Navbar.Collapse>

        </Navbar >
    )
}

export default Navigation;