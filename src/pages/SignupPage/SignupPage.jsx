import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (

        <Container>
            <Row>
                <Col>
                <h1>Registro</h1>
                    <SignupForm />
                </Col>
            </Row>
        </Container>

    )
}

export default SignupPage