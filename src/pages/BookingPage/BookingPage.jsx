import { Container, Row, Col } from 'react-bootstrap'
import BookingCalendar from './../../components/Calendar/Calendar'
import Calendar from './../../components/Calendar/Calendar'


const BookingPage = () => {

    return (

        <Container>
            <Row>
                <Col>
                    <h1>Reservas</h1>
                </Col>

                <Col>
                    <BookingCalendar />
                </Col>
            </Row>
        </Container>

    )
}

export default BookingPage