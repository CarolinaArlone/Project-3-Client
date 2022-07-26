import axios from "axios"

class BookingService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/booking`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createBooking(car_id, newBooking) {
        return this.api.post(`/create/${car_id}`, newBooking)
    }

    findBookingUser(user_id) {
        return this.api.get(`/user/${user_id}`)
    }

    deleteBooking(car_id) {
        return this.api.delete(`/${car_id}/delete`)
    }

}

const bookingService = new BookingService()

export default bookingService