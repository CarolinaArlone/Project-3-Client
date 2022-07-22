import CarsList from "../../components/CarList/CarList"
import Loader from "../../components/Loader/Loader"
import { useContext } from "react"
import { Container } from "react-bootstrap"
import { CarContext } from '../../context/cars.context'

const CarsListPage = () => {

    const { cars } = useContext(CarContext)

    return (

        <Container>

            <h1>Lista de coches</h1>

            <hr />

            {cars.length ? <CarsList /> : <Loader />}

        </Container>

    )
}

export default CarsListPage
