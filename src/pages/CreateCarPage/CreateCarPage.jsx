import { Container, Row, Col } from 'react-bootstrap'
import CarForm from './../../components/CarForm/CarForm'


const CreateCarPage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>Crear coches</h1>
                </Col>
            </Row>

            <CarForm />
        </Container>

    )
}

export default CreateCarPage