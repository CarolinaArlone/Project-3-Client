import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from '../../components/Maps/Maps'
import UserProfile from '../../components/UserProfile/UserProfile'
import './MyProfilePage.css'

const MyProfilePage = () => {

    return (

        <Container>

            <Row>

                <Col>

                    <h1>Mi perfil</h1>
                    <UserProfile />

                </Col>
                
                <Col>
                    <div className='profile-map'>
                    <MapContainer />
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default MyProfilePage