
import CarsList from "../../components/CarList/CarList"
import Loader from "../../components/Loader/Loader"
import { AuthContext } from "../../context/auth.context"
import { useEffect, useState, useContext } from "react"
import { Container } from "react-bootstrap"



const CarsListPage = ({cars, loadCars}) => {


    useEffect(() => {
        loadCars()
    }, [])

   

    return (

        <Container>

            <h1>Lista de coches</h1>
            <hr />
            {cars.length ? <CarsList cars={cars} /> : <Loader />}

        </Container>

    )
}

export default CarsListPage
