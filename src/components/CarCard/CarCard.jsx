import './CarCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CarCard = ({ brand, model, description, imageUrl, _id }) => {

    return (

        <Card className="CarCard mb-4">

            <h1>{brand}</h1>

            <Card.Img variant="top" src={imageUrl} />

            <Card.Body>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

            <Link to={`/editar-coche/${_id}`}>

                <div className="d-grid">
                    <Button variant="warning" size="sm" as="div">Editar</Button>
                </div> <br />

                <div className="d-grid">
                    <Button variant="danger" size="sm" as="div">Eliminar</Button>
                </div>
            </Link>

        </Card>
    )
}

export default CarCard
