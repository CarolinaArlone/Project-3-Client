import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from '../../components/Maps/Maps'
// import MapMarker from '../../components/Maps/MapMarker/MapMarker'
import Loader from '../../components/Loader/Loader'



const MyProfilePage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>Mi perfil</h1>

                </Col>
                {/* <MapMarker /> */}
                <MapContainer/>
                
            </Row>
        </Container>

    )
}

export default MyProfilePage