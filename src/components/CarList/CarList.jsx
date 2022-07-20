import { Col, Row } from 'react-bootstrap'
import CarCard from '';

const CarsList = ({ cars }) => {

    return (
        <Row>
            {
                cars.map(car => {
                    return (
                        <Col md={3} key={car._id} >
                            <CarCard {...car} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}


export default CarsList