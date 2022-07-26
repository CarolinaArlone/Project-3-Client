import { Col, Row, Button } from 'react-bootstrap'
import CarCard from './../CarCard/CarCard'
import { useContext } from 'react'
import { CarContext } from '../../context/cars.context'
import Loader from '../Loader/Loader'



const CarsList = () => {

    const { cars } = useContext(CarContext)

    return (

        <Row>
            {
                cars.length
                    ?
                    cars.map(car => {
                        return (
                            <Col key={car._id} md={{ span: 3 }}>

                                <CarCard {...car} />

                            </Col>
                        )
                    })
                    :
                    <Loader />
            }
        </Row>
    )
}

export default CarsList