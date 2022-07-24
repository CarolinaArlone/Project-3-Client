import { Container, Row, Col } from 'react-bootstrap'
import BookingCalendar from './../../components/Calendar/Calendar'
import { CarContext } from '../../context/cars.context'
import { useContext, useState, useEffect } from 'react'
import CarDetails from '../../components/CarDetails/CarDetails'
import { useParams } from 'react-router-dom'
import DatePicker from '../../components/CalendarPrueba/CalendarPrueba'


const BookingPage = () => {

    const { getOneCar } = useContext(CarContext)
    const [carData, setCarData] = useState({})
    const { car_id } = useParams()

    useEffect(() => {

        getOneCar(car_id)
            .then(({ data }) => {
                const {
                    brand, model, plate, description, imageUrl, dayPrice, size, seats,
                    transmission, fuelType, carRating, location
                } = data

                const [latitude, longitude] = location.coordinates

                const editedCar = {
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
                    carRating,
                    latitude,
                    longitude
                }
                setCarData(editedCar)
            })
            .catch(err => console.log(err))
    }, [])


    return (

        <Container>

            <Row>

                <Col>
                    <h1>Reserva</h1>
                    <CarDetails {...carData} />
                </Col>

                <Col>
                    {/* <BookingCalendar /> */}
                    <DatePicker/> 
                    
                </Col>

            </Row>

        </Container>

    )
}

export default BookingPage