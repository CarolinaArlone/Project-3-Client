import { Button, Row, Col } from 'react-bootstrap'

const MyBookings = ({ bookingData, openModal }) => {

    return (
        <>

            <h3 className='textReservation'>Mis reservas</h3>
            {
                bookingData.map(booking => {
                    const firstDate = new Date(booking.booking.startDate)
                    const finalDate = new Date(booking.booking.endDate)
                    return (
                        <div key={booking.booking._id} className="eachPastBooking">
                            <Row>
                                <Col md={8}>
                                    <h6>{firstDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} - {finalDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</h6>
                                    <h6> {booking.car?.brand} ({booking.car?.plate})</h6>
                                </Col>

                                <Col md={4} className="btn-column">
                                    <Button className="btn-reseña" onClick={() => openModal(booking.car._id)} variant="success">Añadir reseña</Button>
                                </Col>


                            </Row>
                        </div>
                    )

                })

            }
        </>

    )

}

export default MyBookings

