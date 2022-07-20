import { Container, Row, Col } from 'react-bootstrap'
import Maps from '../../components/Maps/Maps'
import Loader from '../../components/Loader/Loader'



const MyProfilePage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>Mi perfil</h1>

                </Col>

                <Maps
                    // googleMapURL="http://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDLf7y6k5PGx_cjdDPGxNq8wy7UDjKTajo"
                    // containerElement={<div style={{ height: '400px' }} />}
                    // mapElement={<div style={{ height: '100%' }} />}
                    // loadingElement={<Loader />}

                />
            </Row>
        </Container>

    )
}

export default MyProfilePage