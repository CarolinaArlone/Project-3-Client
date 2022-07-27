import './Home.css'
import { Row, Col, Container } from 'react-bootstrap'
import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (

        <>

                <Container>
                    <Row>
                        <Col>
                            <div className='left-content'>
                                <p className="stay-home">TE LLEVO!</p>
                                <h1 className='tittleHome'>Te lleva y tu disfrutas del viaje.</h1>
                                <br />
                                <p className="para">
                                    Te-Llevo te ofrece todos los vehículos que necesitas para moverte libremente
                                </p>
                            </div>
                        </Col>

                        <Col className="right-content">
                        <img className='img-second' src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658917175/1_vljcns.png" alt="image" />
                        </Col>
                    </Row>
                </Container>

        </>
    )
}

export default Home