import {
    MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,
    MDBCardText, MDBCardFooter, MDBRow, MDBCol
} from 'mdb-react-ui-kit'
import { Container, Row, Col } from 'react-bootstrap'

const CarDetails = ({
    brand, model, plate, description, imageUrl, dayPrice,
    size, seats, transmission, fuelType, reviews, avgRating, carRatings
}) => {

    return (
        <>
            <Container className='carCard'>
                <Row className='mb-5'>
                    <Col md={{ span: 5 }} className=' carImg'>
                        {{ imageUrl } ?
                            <img src={imageUrl} alt="Foto coche" className='mb-3' />
                            :
                            <img src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658487043/elorqhew4azlkd7nvpwj.png" alt="Foto coche" className='mb-3' />}
                        <h1>{brand}, {model}</h1>
                        <h5>{avgRating / 20}/5 <span className="text-muted">de {carRatings.length} reseñas</span></h5>
                        <p>{description}</p>


                        <Row className="bg-light carInfo">
                            <Col md={{ span: 3 }} className="my-4">
                                <p className="text-muted">Combustible</p>
                                <p className="h5">{fuelType}</p>
                            </Col>
                            <Col md={{ span: 3 }} className="my-4">
                                <p className="text-muted">Transmisión</p>
                                <p className="h5 m-0">{transmission}</p>
                            </Col>
                            <Col md={{ span: 3 }} className="my-4">
                                <p className="text-muted">Tamaño</p>
                                <p className="h5 m-0">{size}</p>
                            </Col>
                            <Col md={{ span: 3 }} className="my-4">
                                <p className="text-muted">Asientos</p>
                                <p className="h5 m-0">{seats}</p>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <div className="col-lg-5 p-0 ps-lg-4">
                    <div className="row m-0">
                        <div className="col-12 px-4">
                            <div className="d-flex justify-content-between mb-2">
                                <p className="textmuted">Matrícula</p>
                                <p className="h4 m-0"><span className="fs-14 fw-bold">{plate}</span></p>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <p className="textmuted fw-bold">Precio por día</p>
                                <p className="fs-14 fw-bold">{dayPrice}€</p>
                            </div>
                        </div>
                        <div className="col-12 px-0">
                            <div className="row bg-light m-0">
                                <div className="col-12 px-4 my-4 d-flex justify-content-between mb-3">
                                    <p className="fw-bold">Total</p>
                                    <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span><span className="h4">1,350€</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>








            {/* < MDBRow className='row-cols-3 row-cols-md-3 g-2 carDetails' >
                <MDBCol>
                    <MDBCard className='h-100'>
                        {{ imageUrl } ? <MDBCardImage
                            src={imageUrl} alt="Foto coche"
                            position='top'
                        /> : <MDBCardImage
                            src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658487043/elorqhew4azlkd7nvpwj.png" alt="Foto coche"
                            position='top'
                        />}

                        <MDBCardBody>
                            <MDBCardTitle><h1>{brand}, {model}</h1> </MDBCardTitle>
                            <MDBCardText>
                                <h2>Matricula: {plate}</h2>
                            </MDBCardText>
                            <MDBCardText>
                                <p>Número de asientos: {seats}</p>
                                <p>Descripción: {description} </p>
                                <p>Tipo de combustible: {fuelType}</p>
                                <p>Precio por día: {dayPrice} </p>
                                <p>Tamaño del coche:{size}</p>
                                <p>Transmisión: {transmission}</p>
                            </MDBCardText>
                        </MDBCardBody>

                        <MDBCardFooter>
                            <small className='text-muted'><h4>Reseñas</h4> <br />
                                {<p> {reviews?.map(review => <p key={review._id}>{review.user.username}, {review.content}<hr /></p>)}</p>}
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow > */}

        </>
    )
}

export default CarDetails


