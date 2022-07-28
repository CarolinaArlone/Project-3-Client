import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import carService from '../../services/car.services'
import { Rating } from 'react-simple-star-rating'
import './ReviewForm.css'
import {
    MdOutlineSentimentDissatisfied,
    MdOutlineSentimentNeutral,
    MdOutlineSentimentSatisfied,
    MdOutlineSentimentVeryDissatisfied,
    MdOutlineSentimentVerySatisfied
} from 'react-icons/md'

const ReviewForm = ({ car_id, fireFinalActions }) => {

    const { user } = useContext(AuthContext)
    const [content, setContent] = useState('')
    const [ratingValue, setRatingValue] = useState(0)
    const navigate = useNavigate()

    const customIcons = [
        { icon: <MdOutlineSentimentDissatisfied size={50} /> },
        { icon: <MdOutlineSentimentNeutral size={50} /> },
        { icon: <MdOutlineSentimentSatisfied size={50} /> },
        { icon: <MdOutlineSentimentVeryDissatisfied size={50} /> },
        { icon: <MdOutlineSentimentVerySatisfied size={50} /> }
    ]

    const handleInput = e => {
        const { name, value } = e.target
        setContent({ ...content, [name]: value })
    }

    const handleRating = (rate) => {
        setRatingValue({ carRating: rate })
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
            .addCarRating({ car_id, carRating: ratingValue })
            .then(() => {
                setRatingValue(ratingValue)
            })
            .catch(err => console.log(err.message))
    }

    return (
        <>

            <Form onSubmit={handleSubmit}>
                <h4 className="mb-4">{user.username}</h4>

                {/*   <Form.Label>Valoración</Form.Label>
                <Form.Control className="mb-3" type="number" name="carRating" min='1' max='5' onChange={handleRatingInput} /> */}

                <Rating
                    initialValue={0}
                    onClick={handleRating}
                    ratingValue={ratingValue}
                    /* className='stars' */
                    showTooltip
                    emptyStyle
                    tooltipDefaultText='Tu puntuación'
                    tooltipArray={['Malo', 'Normal', 'Bueno', 'Muy bueno', 'Excelente']}
                    customIcons={customIcons}
                />

                <Form.Label>Escriba aquí su comentario</Form.Label>
                <Form.Control className="mb-3" name='content' as="textarea" rows={3} onChange={handleInput} />

                <div className="d-grid mb-4">
                    <Button className='buttonReviewForm' variant="dark" type="submit">Crear reseña</Button>
                </div>
            </Form>

        </>
    )
}

export default ReviewForm