import { createContext, useState, useEffect } from "react"
import carService from "../services/car.services"

const CarContext = createContext()

const CarsWrapper = (props) => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        loadCars()
    }, [])

    const loadCars = () => {
        carService
            .getCars()
            .then(({ data }) => setCars(data))
            .catch(err => console.log(err))
    }

    const editCar = (car_id, carData) => {
        carService
            .editCar(car_id, carData)
            .then(() => loadCars())
            .catch(err => console.log(err))
    }

    const createCar = (carData) => {
        carService
            .createCar(carData)
            .then(() => loadCars())
            .catch(err => console.log(err))
    }

    const getOneCar = (car_id) => {
        return carService.getOneCar(car_id)
    }

    const deleteCar = (car_id) => {
        carService
            .deleteCar(car_id)
            .then(() => loadCars())
            .catch(err => console.log(err))
    }

    return (

        <CarContext.Provider value={{ cars, loadCars, editCar, createCar, deleteCar, getOneCar }}>
            {props.children}
        </CarContext.Provider>
    )
}

export { CarContext, CarsWrapper }