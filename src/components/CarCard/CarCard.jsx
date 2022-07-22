import './CarCard.css'
import { Card } from 'react-bootstrap'

const CarCard = ({ brand, model, description, imageUrl }) => {

    return (

        <Card className="CarCard mb-4">

            <Card.Img variant="top" src={imageUrl} />

            <Card.Body>
                <Card.Title>{brand}</Card.Title>
                <Card.Text>{model}</Card.Text>
                <Card.Text>{description}</Card.Text>
            </Card.Body>

        </Card>
    )
}

export default CarCard
