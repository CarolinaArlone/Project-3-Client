import { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'

const Navigation = () => {

    const { user, logoutUser } = useContext(AuthContext)

    const logout = () => {
        logoutUser()
    }

    return (
        <Navbar className='Navigation' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/'><Navbar.Brand href="">Te-Llevo</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/registro'><Nav.Link as="span">Únete</Nav.Link></Link>
                        <NavDropdown title="Opciones" id="collasible-nav-dropdown">
                            <Link to='/iniciar-sesion'><NavDropdown.Item as="span">Iniciar sesión</NavDropdown.Item></Link>
                            <Link to='/iniciar-sesion'><NavDropdown.Item as="span">Mi Perfil</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Nav.Link onClick={logout}><NavDropdown.Item as="span">Cerrar sesión</NavDropdown.Item></Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;