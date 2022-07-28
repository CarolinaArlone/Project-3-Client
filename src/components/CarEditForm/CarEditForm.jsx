import './CarEditForm.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import uploadService from '../../services/upload.services'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { CarContext } from '../../context/cars.context'

const CarEditForm = () => {

    const { car_id } = useParams()
    const navigate = useNavigate()
    const { editCar, getOneCar } = useContext(CarContext)

    const [loadingImage, setLoadingImage] = useState(false)
    const [loadingCar, setLoadingCar] = useState(true)

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
        latitude: '',
        longitude: ''
    })

    const {
        brand, model, plate, description, imageUrl, dayPrice, size, seats,
        transmission, fuelType, latitude, longitude
    } = carData

    useEffect(() => {

        getOneCar(car_id)
            .then(({ data }) => {
                const {
                    brand, model, plate, description, imageUrl, dayPrice, size, seats,
                    transmission, fuelType, location
                } = data

                const [latitude, longitude] = location.coordinates

                const editedCar = {
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
                    longitude
                }
                setCarData(editedCar)
                setLoadingCar(false)
            })
            .catch(err => console.log(err))


    }, [])

    const handleInputChange = e => {

        const { name, value } = e.target
        setCarData({ ...carData, [name]: value })
    }

    const uploadCarImage = e => {

        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setCarData({ ...carData, imageUrl: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        editCar(car_id, carData)
        navigate('/lista-coches')
    }

    return (
        <>
            {
                loadingCar
                    ?
                    <Loader />
                    :
                    <Container className='formEdit'>

                        <Form onSubmit={handleSubmit}>
                            <Row>

                                <Col>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Marca</Form.Label>
                                        <Form.Control type="text" name="brand" value={brand} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Modelo</Form.Label>
                                        <Form.Control type="text" name="model" value={model} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Matrícula</Form.Label>
                                        <Form.Control type="text" name="plate" value={plate} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>

                                <Col>
                                    <Form.Group controlId="imageUrl" className="mb-3">
                                        <Form.Label> Imagen </Form.Label>
                                        <Form.Control type="file" onChange={uploadCarImage} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId='size' >
                                        <Form.Label>Tamaño</Form.Label>
                                        <Form.Select aria-label="Default select example" type="text" name="size" onChange={handleInputChange}>
                                            <option value="">Seleccion el tamaño del coche</option>
                                            <option value="SMALL">Coche pequeño</option>
                                            <option value="MEDIUM">Coche mediano</option>
                                            <option value="LARGE">Coche grande</option>
                                            <option value="FAMILY">Coche familiar</option>
                                            <option value="VAN">Furgoneta</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Asientos</Form.Label>
                                        <Form.Control type="text" name="seats" value={seats} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>

                            </Row>

                            <Row>

                                <Col>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Precio/Día</Form.Label>
                                        <Form.Control type="text" name="dayPrice" value={dayPrice} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="transmission">
                                        <Form.Label>Transmisión</Form.Label>
                                        <Form.Select aria-label="Default select example" type="text" name="transmission" onChange={handleInputChange}>
                                            <option value="">Seleccion el tipo de transmisión</option>
                                            <option value="MANUAL">Manual</option>
                                            <option value="AUTOMATIC">Automático</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="fuelType" >
                                        <Form.Label>Tipo de combustible</Form.Label>
                                        <Form.Select aria-label="Default select example" type="text" name="fuelType" onChange={handleInputChange}>
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

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Latitud</Form.Label>
                                        <Form.Control type="text" name="latitude" value={latitude} onChange={handleInputChange} />
                                    </Form.Group>

                                </Col>

                                <Col>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Longitud</Form.Label>
                                        <Form.Control type="text" name="longitude" value={longitude} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" >
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />
                            </Form.Group>

                            <Button className='buttonEditForm' variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Un momento...' : 'guardar cambios'}</Button>
                        </Form>
                    </Container>
            }
        </>
    )
}

export default CarEditForm



