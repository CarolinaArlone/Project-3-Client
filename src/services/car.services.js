import axios from "axios"

class CarService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cars`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getCars() {
        return this.api.get('/all')
    }

    createCar(newCar) {
        return this.api.post('/create', newCar)
    }

    getOneCar(car_id) {
        return this.api.get(`/${car_id}`)
    }

    editCar(car_id, carData) {
        return this.api.put(`/${car_id}/edit`, carData)
    }

    deleteCar(car_id) {
        return this.api.delete(`/${car_id}/delete`)
    }

    addCarReview({ car_id, user_id, content }) {
        console.log(car_id)

        return this.api.put(`/${car_id}/add-review/${user_id}`, content)
    }

    addCarRating(car_id, rate) {
        return this.api.put(`/${car_id}/add-car-rating`, rate)
    }

    bookedDates(car_id) {
        return this.api.get(`/${car_id}/booked-dates`)
    }

}

const carService = new CarService()

export default carService