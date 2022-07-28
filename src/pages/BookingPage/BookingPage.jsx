import { Container, Row, Col } from 'react-bootstrap'
import { CarContext } from '../../context/cars.context'
import { useContext, useState, useEffect } from 'react'
import CarDetails from '../../components/CarDetails/CarDetails'
import { useParams } from 'react-router-dom'
import DatePicker from '../../components/Calendar/Calendar'
import Reviewcard from '../../components/ReviewCard/ReviewCard'
import './BookingPage.css'


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
            <Row className='mb-5'>

                <Col md={{ span: 6 }} >
                    <div >
                        <h1 className='mt-3'>Tu reserva</h1>
                        {carData && <CarDetails {...carData} />}
                    </div>
                </Col>

                <Col md={{ span: 6 }} className='calendar'>
                    <div>
                        {carData && <DatePicker car_id={car_id} />}
                    </div>
                </Col>

            </Row>
            <div>
                <h1>Reseñas</h1>
                <Row>
                    {carData && <Reviewcard {...carData} />}
                </Row>
            </div>

        </Container >

    )
}

export default BookingPage