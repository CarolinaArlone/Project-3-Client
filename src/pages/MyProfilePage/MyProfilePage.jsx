import { Container, Row, Col } from 'react-bootstrap'
import MapContainer from '../../components/Maps/Maps'
import UserProfile from '../../components/UserProfile/UserProfile'
import './MyProfilePage.css'

const MyProfilePage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ span: 4 }}>

                    <h1 className='texFont'>Mi perfil</h1>
                    <UserProfile />

                </Col>

                <Col md={{ span: 7, offset: 1 }}>
                    <div className='profile-map'>
                        <MapContainer />
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default MyProfilePage