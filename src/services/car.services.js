import axios from "axios"

class CarService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cars`
        })
    }

    getAllCar() {
        return this.api.get('/all')
    }

    createCar() {
        return this.api.post('/create')
    }

    getOneCar(car_id) {
        return this.api.get(`/${car_id}`)
    }

    editCar(car_id) {
        return this.api.put(`/${car_id}/edit`)
    }

    editCar(car_id) {
        return this.api.delete(`/${car_id}/delete`)
    }

    addCarReview(car_id) {
        return this.api.post(`/${car_id}/add-review`)
    }

}

const carService = new CarService()

export default carService