import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from '../../components/Maps/Maps'

const MyProfilePage = () => {

    return (

        <Container>

            <Row>

                <Col>

                    <h1>Mi perfil</h1>

                </Col>

                <MapContainer />

            </Row>

        </Container>

    )
}

export default MyProfilePage