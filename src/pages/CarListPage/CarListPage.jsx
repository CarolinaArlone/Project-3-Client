import carsService from "../../services/car.services"
import CarsList from "../../components/CarList/CarList"
import CarsForm from "../../components/CarForm/CarForm"
import Loader from "../../components/Loader/Loader"

import { AuthContext } from "../../context/auth.context"
import { useEffect, useState, useContext } from "react"
import { Container } from "react-bootstrap"


const CarsListPage = () => {

    const [cars, setCars] = useState([])

    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadCars()
    }, [])

    const loadCars = () => {

        carsService
            .getCars()
            .then(({ data }) => setCars(data))
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <h1>Lista de coches</h1>
            <hr />
            {cars.length ? <CarsList cars={cars} /> : <Loader />}

        </Container>

    )
}

export default CarsListPage
