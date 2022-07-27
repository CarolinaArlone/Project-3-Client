import React, { useEffect, useState } from 'react'
import {
    MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle,
    MDBCardText, MDBCardFooter, MDBRow, MDBCol
} from 'mdb-react-ui-kit'
import userService from '../../services/user.services'

const CarDetails = ({
    brand, model, plate, description, imageUrl, dayPrice,
    size, seats, transmission, fuelType, reviews
}) => {

    const [userData, setUserData] = useState({})

    /* useEffect(() => {

        userService
            .findUser(user_id)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))
    }, []) */

    return (
        <>
            < MDBRow className='row-cols-1 row-cols-md-1 g-2' >
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
                            <MDBCardTitle>Detalles del coche {brand}, {model}</MDBCardTitle>
                            <MDBCardText>
                                <h3>Matricula: {plate}</h3>
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
            </MDBRow >

        </>
    )
}

export default CarDetails


