import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import carService from '../../services/car.services'
import StarRating from '../StarRating/StarRating'

const ReviewForm = ({ car_id, fireFinalActions }) => {

    const { user } = useContext(AuthContext)
    const [content, setContent] = useState('')
    const [carRating, setCarRating] = useState()
    const navigate = useNavigate()

    const handleInput = e => {
        const { name, value } = e.target
        setContent({ ...content, [name]: value })
    }

    const handleRatingInput = e => {
        const { value } = e.target
<<<<<<< HEAD
        setCarRating({ carRating: value })
=======
        setRate(value)

>>>>>>> 9d8eaefbc3a5d7625ba2b579fda330e281d9dc7d
    }

    const handleSubmit = e => {
        e.preventDefault()

        carService
            .addCarReview({ car_id, user_id: user._id, content })
            .then(() => {
                fireFinalActions()
                setContent(content)
                navigate(`/mireserva/${car_id}`)
            })
            .catch(err => console.log(err.message))

        carService
            .addCarRating({ car_id, carRating })
            .then(() => {
                setCarRating(carRating)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <h4 className="mb-4">{user.username}</h4>

                <Form.Label>Valoración</Form.Label>
                <Form.Control className="mb-3" type="number" name="carRating" min='1' max='5' onChange={handleRatingInput} />

                <StarRating />

                <Form.Label>Escriba aquí su comentario</Form.Label>
                <Form.Control className="mb-3" name='content' as="textarea" rows={3} onChange={handleInput} />

                <div className="d-grid mb-4">
                    <Button variant="dark" type="submit">Crear reseña</Button>
                </div>
            </Form>

        </>
    )
}

export default ReviewForm