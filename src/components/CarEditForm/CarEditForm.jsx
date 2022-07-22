import { Form, Button, Container } from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import CarService from '../../services/car.services'
import uploadService from '../../services/upload.services'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './CarEditForm.css'
import { CarContext } from '../../context/cars.context'

const CarEditForm = () => {

    const { car_id } = useParams()
    const navigate = useNavigate()
    const { editCar } = useContext(CarContext)
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
        carRating: '',
        latitude: '',
        longitude: ''
    })

    const {
        brand, model, plate, description, imageUrl, dayPrice, size, seats,
        transmission, fuelType, carRating, latitude, longitude
    } = carData

    useEffect(() => {

        CarService
            .getOneCar(car_id)
            .then(({ data }) => {

                const {
                    brand, model, plate, description, imageUrl, dayPrice, size, seats,
                    transmission, fuelType, carRating, location
                } = data

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
                    carRating,
                    latitude: location.coordinates[0],
                    longitude: location.coordinates[1]
                }

                setCarData(editedCar)
                setLoadingCar(false)
            })
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
                            <Form.Group className="mb-3" >
                                <Form.Label>Marca</Form.Label>
                                <Form.Control type="text" name="brand" value={brand} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Modelo</Form.Label>
                                <Form.Control type="text" name="model" value={model} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Matrícula</Form.Label>
                                <Form.Control type="text" name="plate" value={plate} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Precio/Día</Form.Label>
                                <Form.Control type="text" name="dayPrice" value={dayPrice} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Tamaño</Form.Label>
                                <Form.Control type="text" name="size" value={size} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Asientos</Form.Label>
                                <Form.Control type="text" name="seats" value={seats} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Transmisión</Form.Label>
                                <Form.Control type="text" name="transmission" value={transmission} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Tipo de combustible</Form.Label>
                                <Form.Control type="text" name="fuelType" value={fuelType} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Valoración</Form.Label>
                                <Form.Control type="text" name="carRating" value={carRating} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Latitud</Form.Label>
                                <Form.Control type="text" name="latitude" value={latitude} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Longitud</Form.Label>
                                <Form.Control type="text" name="longitude" value={longitude} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="imageUrl" className="mb-3">
                                <Form.Label> Imagen </Form.Label>
                                <Form.Control type="file" onChange={uploadCarImage} />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Un momento...' : 'guardar cambios'}

                            </Button>
                        </Form>
                    </Container>
            }
        </>
    )
}

export default CarEditForm