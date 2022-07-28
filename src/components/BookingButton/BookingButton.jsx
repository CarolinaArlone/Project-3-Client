import { useContext, useState, useParams } from 'react'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import bookingService from '../../services/booking.services'
import { useNavigate } from 'react-router-dom'
import './BookingButton.css'


const BookingButton = ({ ranges, car_id }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { startDate, endDate } = ranges[0]

    const handleSubmit = e => {
        e.preventDefault()

        bookingService
            .createBooking(car_id, { startDate, endDate, user })
            .then(() => navigate('/pago'))
            .catch(err => console.log(err.message))
            // (`/miperfil/${user._id}`)
    }

    return (
        <Button className='buttonBooking' onClick={handleSubmit} variant="primary" type="submit">Reservar</Button>
    )
}

export default BookingButton