import { Container } from 'react-bootstrap'
import { CarContext } from '../../context/cars.context'
import { useContext, useState, useEffect } from 'react'
import CarDetails from '../../components/CarDetails/CarDetails'
import { useParams } from 'react-router-dom'
import DatePicker from '../../components/Calendar/Calendar'

const BookingPage = () => {

    const { getOneCar } = useContext(CarContext)
    const [carData, setCarData] = useState()
    const { car_id } = useParams()


    useEffect(() => {

        getOneCar(car_id)
            .then(({ data }) => {
                const {
                    reviews, brand, model, plate, description, imageUrl, dayPrice, size, seats,
                    transmission, fuelType, location, avgRating, carRatings
                } = data

                const [latitude, longitude] = location.coordinates

                const editedCar = {
                    reviews,
                    brand,
                    model,
                    plate,
                    description,
                    imageUrl,
                    dayPrice,
                    size,
                    seats,
                    transmission,
                    fuelType,
                    latitude,
                    longitude,
                    avgRating,
                    carRatings
                }
                setCarData(editedCar)
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <Container>

            <div className='bookingContainer'>

                <div className='carInfo' >
                    <h1>Reserva</h1>
                    {carData && <CarDetails {...carData} />}
                </div>

                <div className='calendar'>
                    <DatePicker car_id={car_id} />
                </div>

            </div>

        </Container>

    )
}

export default BookingPage