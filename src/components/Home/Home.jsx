import './Home.css'
import { Row, Col, Container } from 'react-bootstrap'

const Home = () => {
    return (

        <>
            <div className='header'>
                <img src='https://res.cloudinary.com/djs7qv2pt/image/upload/v1658734774/fondogoto_fme6si.webp' alt="home"></img>

                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='left-content'>
                                <p className="stay-home">TE LLEVO!</p>
                                <h1>Te lleva y tu disfrutas del viaje.</h1>
                                <br />
                                <p className="para">
                                    Te-Llevo te ofrece todos los vehículos que necesitas para moverte libremente
                                </p>
                            </div>
                        </Col>

                        <Col md={6}>
                            <img className='img-second' src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658670846/vvjcj2edhbfytiecmuh6.png" alt="image" />
                        </Col>
                    </Row>
                </Container>

            </div>




        </>
    )
}

export default Home