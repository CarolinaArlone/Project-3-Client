import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import carService from '../../services/car.services'



const ReviewForm = ({ car_id, fireFinalActions }) => {


    console.log('CARRRRR', car_id)
    const { user } = useContext(AuthContext)
    const [content, setContent] = useState("")
    const [rate, setRate] = useState(0)
    const navigate = useNavigate()

    const handleInput = e => {

        const { name, value } = e.target
        setContent({ ...content, [name]: value })

    }

    const handleRatingInput = e => {

        const { value } = e.target
        setRate(value)

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
            .addCarRating({ car_id, rate })
            .then(() => console.log(rate))
            .catch(err => console.log(err.message))

    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{user.username}</Form.Label>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Group className="mb-3" >
                        <Form.Label>Valoración</Form.Label>
                        <Form.Control type="number" name="rate" min='0' max='5' onChange={handleRatingInput} />
                    </Form.Group>
                    <Form.Label>Escriba aquí su comentario</Form.Label>
                    <Form.Control name='content' as="textarea" rows={3} onChange={handleInput} />
                </Form.Group>
                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear reseña</Button>
                </div>
            </Form>

        </>
    )
}

export default ReviewForm