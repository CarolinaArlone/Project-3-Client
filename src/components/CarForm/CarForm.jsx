// import { upload } from "@testing-library/user-event/dist/upload"
import { useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import carServices from './../../services/car.services'
import uploadSevices from './../../services/upload.services'


const CarForm = ({ fireFinalActions }) => {

    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        plate: '',
        description: '',
        imageUrl: '',
        dayPrice: '',
        size: '',
        seats: '',
        transmission: '',
        fuelType: '',
        carRating: '',
        latitude: '',
        longitude: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleChange = e => {
        const { value, name } = e.target
        setCarData({ ...carData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        carServices
            .createCar(carData)
            .then(() => fireFinalActions())
            .catch(err => console.error(err))
    }

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadSevices
            .uploadImage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setCarData({ ...carData, imageUrl: data.cloudinary_url })
            })
            .catch(err => console.error(err))
    }

    const { brand, model, plate, description, imageUrl, dayPrice, size, seats, transmission, fuelType, carRating, latitude, longitude } = carData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="brand">
                <Form.Label>Marca</Form.Label>
                <Form.Control type="text" value={brand} onChange={handleChange} name="brand" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="model">
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="text" value={model} onChange={handleChange} name="model" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="plate">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control type="text" value={plate} onChange={handleChange} name="plate" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen (Archivo)</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="imageUrl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="dayPrice">
                <Form.Label>Precio/Día</Form.Label>
                <Form.Control type="text" value={dayPrice} onChange={handleChange} name="dayPrice" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Tamaño</Form.Label>
                <Form.Control type="text" value={size} onChange={handleChange} name="size" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="seats">
                <Form.Label>Asientos</Form.Label>
                <Form.Control type="text" value={seats} onChange={handleChange} name="seats" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="transmission">
                <Form.Label>Transmisión</Form.Label>
                <Form.Control type="text" value={transmission} onChange={handleChange} name="transmission" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fuelType">
                <Form.Label>Tipo de combustible</Form.Label>
                <Form.Control type="text" value={fuelType} onChange={handleChange} name="fuelType" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fuelType">
                <Form.Label>Valoración</Form.Label>
                <Form.Control type="text" value={carRating} onChange={handleChange} name="carRating" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="latitude">
                        <Form.Label>Latitud</Form.Label>
                        <Form.Control type="number" value={latitude} onChange={handleChange} name="latitude" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="longitude">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="number" value={longitude} onChange={handleChange} name="longitude" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit" disabled={isLoading}>{isLoading ? 'Un momento, por favor...' : 'Crear coche'}</Button>
            </div>

        </Form>
    )
}


export default CarForm