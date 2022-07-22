import { Container, Row, Col } from 'react-bootstrap'
import CarForm from './../../components/CarForm/CarForm'

const CreateCarPage = () => {

    return (

        <Container>

            <h1>Crear coches</h1>

            <Container className='margin-creater-form'>

                <CarForm />

            </Container>

        </Container>

    )
}

export default CreateCarPage