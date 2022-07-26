import { Container, Row, Col, Button } from 'react-bootstrap'
import { CarContext } from '../../context/cars.context'
import { useContext, useState, useEffect } from 'react'
import CarDetails from '../../components/CarDetails/CarDetails'
import { useParams } from 'react-router-dom'
import DatePicker from '../../components/Calendar/Calendar'

const BookingPage = () => {

    const { getOneCar } = useContext(CarContext)
    const [carData, setCarData] = useState({})
    const { car_id } = useParams()

    useEffect(() => {

        getOneCar(car_id)
            .then(({ data }) => {
                const {
                    reviews, brand, model, plate, description, imageUrl, dayPrice, size, seats,
                    transmission, fuelType, carRating, location
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
                    <DatePicker car_id={car_id} />
                </Col>

            </Row>

        </Container>

    )
}

export default BookingPage