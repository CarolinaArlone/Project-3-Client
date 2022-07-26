import { useContext, useState, useParams } from 'react'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'
import bookingService from '../../services/booking.services'
import { useNavigate } from 'react-router-dom'


const BookingButton = ({ ranges, car_id} ) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const {startDate, endDate} = ranges[0]

    const handleSubmit = e => {
        e.preventDefault()

        bookingService
            .createBooking(car_id, { startDate, endDate, user })
            .then(() => navigate(`/miperfil/${user._id}`))
            .catch(err => console.log(err.message))
    }

    return (
        <Button onClick={handleSubmit} variant="primary" type="submit">Reservar</Button>
    )
}

export default BookingButton