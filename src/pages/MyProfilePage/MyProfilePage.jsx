import { Container, Row, Col } from 'react-bootstrap'
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile'
import MapContainer from '../../components/Maps/Maps'
import UserProfile from '../../components/UserProfile/UserProfile'

const MyProfilePage = () => {

    return (

        <Container>

            <Row>

                <Col>

                    <h1>Mi perfil</h1>
                    <UserProfile />
                   

                </Col>
                
                <Col>
                    <MapContainer />
                </Col>
            </Row>

        </Container>

    )
}

export default MyProfilePage