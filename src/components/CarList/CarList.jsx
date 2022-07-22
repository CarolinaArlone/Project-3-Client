import { Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CarCard from './../CarCard/CarCard'
import { useContext } from 'react'
import { CarContext } from '../../context/cars.context'


const CarsList = () => {

    const { cars } = useContext(CarContext)

    return (
        <Row>
            {cars.map(car => {
                return (
                    <Col key={car._id} >
                        <h1>{car.brand}</h1>
                        <CarCard {...car} />
                        <Link to={`/detalles/${car._id}`}>
                            <div className="d-grid">
                                <Button variant="warning" size="sm" as="div">Editar</Button>
                            </div> <br />
                            <div className="d-grid">
                                <Button variant="danger" size="sm" as="div">Eliminar</Button>
                            </div>
                        </Link>
                    </Col>
                )
            })
            }
        </Row>
    )
}


export default CarsList