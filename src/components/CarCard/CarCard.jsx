import './CarCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CarContext } from '../../context/cars.context'


const CarCard = ({ brand, model, description, imageUrl, _id: car_id }) => {

    const { deleteCar } = useContext(CarContext)
    const navigate = useNavigate()


    const handleDelete = () => {
        deleteCar(car_id)
        navigate('/lista-coches')
    }

    return (

        <Card className="rounded mx-auto carCard">
            <Card.Header className="p-0">
                <Card.Img variant="top" src={imageUrl} />
            </Card.Header>
            <Card.Body>
                <Card.Title className="text-dark title-car-card">{brand}</Card.Title>
                <Card.Text className="text-dark text-car-card">{model}</Card.Text>
                <Card.Text className="text-muted mb-1 text-description">{description}</Card.Text>
            </Card.Body>
            <Link to={`/editar-coche/${car_id}`}>
                <Button className='buttonCard' variant="outline-warning" size="sm" as="div">Editar</Button>
            </Link>
            <Button className='buttonCard' onClick={handleDelete} variant="outline-danger" size="sm" as="div">Eliminar</Button>
        </Card >

    )

}

export default CarCard
