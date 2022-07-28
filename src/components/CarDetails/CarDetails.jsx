import {
    MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,
    MDBCardText, MDBCardFooter, MDBRow, MDBCol
} from 'mdb-react-ui-kit'
import { Container, Row, Col } from 'react-bootstrap'
import './CarDetails.css'

const CarDetails = ({
    brand, model, plate, description, imageUrl, dayPrice,
    size, seats, transmission, fuelType, reviews, avgRating, carRatings
}) => {

    return (
        <>
            < MDBRow >
                <MDBCol>
                    <MDBCard className='h-100 carDetails'>
                        {{ imageUrl } ? <MDBCardImage
                            src={imageUrl} alt="Foto coche"
                            position='top'
                        /> : <MDBCardImage
                            src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658487043/elorqhew4azlkd7nvpwj.png" alt="Foto coche"
                            position='top'
                        />}

                        <MDBCardBody>
                            <MDBCardTitle>
                                <div>
                                    <h1>{brand} {model}</h1>
                                </div>
                            </MDBCardTitle>
                            <MDBCardText>{avgRating / 20}/5 <span className="text-muted">de {carRatings.length} reseña(s)</span></MDBCardText>
                            <MDBCardText>{description}</MDBCardText>
                            <div>
                                <Row className="bg-light carInfo">
                                    <Col md={{ span: 3 }} className="my-4">
                                        <p className="text-muted">Combustible</p>
                                        <p className="h5">{fuelType.toLowerCase()}</p>
                                    </Col>
                                    <Col md={{ span: 3 }} className="my-4">
                                        <p className="text-muted">Transmisión</p>
                                        <p className="h5 m-0">{transmission.toLowerCase()}</p>
                                    </Col>
                                    <Col md={{ span: 3 }} className="my-4">
                                        <p className="text-muted">Tamaño</p>
                                        <p className="h5 m-0">{size.toLowerCase()}</p>
                                    </Col>
                                    <Col md={{ span: 3 }} className="my-4">
                                        <p className="text-muted">Asientos</p>
                                        <p className="h5 m-0">{seats}</p>
                                    </Col>
                                </Row>
                            </div>
                        </MDBCardBody>

                        <MDBCardFooter>
                            <small>
                                <div className="text-muted d-flex justify-content-between mb-3 my-4">
                                    <h4 className="textmuted fw-bold">Marícula</h4>
                                    <h4 className="fs-14 fw-bold">{plate}</h4>
                                </div>
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow >

        </>
    )
}

export default CarDetails


