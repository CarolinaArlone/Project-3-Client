import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {



    return (
        <Navbar className='Navigation' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Te-Llevo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/registro'><Nav.Link as="span">Únete</Nav.Link></Link>
                        <NavDropdown title="Mi Perfil" id="collasible-nav-dropdown">
                            <Link to='/iniciar-sesion'><NavDropdown.Item as="span">Iniciar sesión</NavDropdown.Item></Link>
                            <NavDropdown.Divider />
                            <Link to='/'><NavDropdown.Item as="span">Cerrar sesión</NavDropdown.Item></Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;