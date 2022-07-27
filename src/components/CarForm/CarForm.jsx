import { useContext, useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import uploadSevices from './../../services/upload.services'
import { useNavigate } from 'react-router-dom'
import { CarContext } from "../../context/cars.context"
import './CarForm.css'

const CarForm = () => {

    const { createCar } = useContext(CarContext)
    const navigate = useNavigate()

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
        createCar(carData)
        navigate('/lista-coches')
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
            .catch(err => console.log(err))
    }

    const {
        brand, model, plate, description, imageUrl, dayPrice, size, seats,
        transmission, fuelType, carRating, latitude, longitude
    } = carData

    return (

        <div className='formEdit'>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="brand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" value={brand} onChange={handleChange} name="brand" />
                        </Form.Group>
                    </Col>

                    <Col>

                        <Form.Group className="mb-3" controlId="model">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" value={model} onChange={handleChange} name="model" />
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="plate">
                            <Form.Label>Matrícula</Form.Label>
                            <Form.Control type="text" value={plate} onChange={handleChange} name="plate" />
                        </Form.Group>


                    </Col>

                </Row>
                <Row>

                    <Col>

                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen (Archivo)</Form.Label>
                            <Form.Control type="file" onChange={handleFileInput} name="imageUrl" />
                        </Form.Group>

                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="dayPrice">
                            <Form.Label>Precio/Día</Form.Label>
                            <Form.Control type="number" value={dayPrice} onChange={handleChange} name="dayPrice" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="size">
                            <Form.Label>Tamaño</Form.Label>
                            <Form.Select aria-label="Default select example" type="text" name="size" onChange={handleChange}>
                                <option value="">Seleccion el tamaño del coche</option>
                                <option value="SMALL">Coche pequeño</option>
                                <option value="MEDIUM">Coche mediano</option>
                                <option value="LARGE">Coche grande</option>
                                <option value="FAMILY">Coche familiar</option>
                                <option value="VAN">Furgoneta</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>

                    <Col>
                        <Form.Group className="mb-3" controlId="seats">
                            <Form.Label>Número de asientos</Form.Label>
                            <Form.Control type="text" value={seats} onChange={handleChange} name="seats" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="transmission">
                            <Form.Label>Transmisión</Form.Label>
                            <Form.Select aria-label="Default select example" type="text" name="transmission" onChange={handleChange}>
                                <option value="">Seleccion el tipo de transmisión</option>
                                <option value="MANUAL">Manual</option>
                                <option value="AUTOMATIC">Automático</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="fuelType">
                            <Form.Label>Tipo de combustible</Form.Label>
                            <Form.Select aria-label="Default select example" type="text" name="fuelType" onChange={handleChange}>
                                <option value="">Seleccion el tipo de combustible</option>
                                <option value="PETROL">Gasolina</option>
                                <option value="DIESEL">Diesel</option>
                                <option HYBRID="DIESEL">Hibrido</option>
                                <option ELECTRIC="DIESEL">Eléctrico</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="latitude">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control type="text" value={latitude} onChange={handleChange} name="latitude" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="longitude">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="text" value={longitude} onChange={handleChange} name="longitude" />
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
        </div>
    )
}

export default CarForm