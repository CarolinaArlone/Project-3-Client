import { createContext, useState, useEffect } from "react"
import carService from "../services/car.services"

const CarContext = createContext()

const ArrayCarsWrapper = (props) => {

    const [cars, setCars] = useState([])

    const loadCars = () => {

        carService
            .getCars()
            .then(({ data }) => setCars(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadCars()
    }, [])

    return (
        <CarContext.Provider value={{ cars, loadCars }}>
            {props.children}
        </CarContext.Provider>
    )
}

export { CarContext, ArrayCarsWrapper }