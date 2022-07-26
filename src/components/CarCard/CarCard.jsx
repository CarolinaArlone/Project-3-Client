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

        <Card className="CarCard mb-4">

            <h1>{brand}</h1>

            <Card.Img variant="top" src={imageUrl} />

            <Card.Body>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

            <Link to={`/editar-coche/${car_id}`}>

                <div className="d-grid">
                    <Button variant="warning" size="sm" as="div">Editar</Button>
                </div> <br />
            </Link>
            <div className="d-grid">
                <Button onClick={handleDelete} variant="danger" size="sm" as="div">Eliminar</Button>
            </div>
        </Card>
    )
}

export default CarCard
