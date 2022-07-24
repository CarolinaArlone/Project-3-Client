import axios from "axios"

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    findUser(user_id) {
        return this.api.get(`/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/${user_id}/edit`, userData)
    }

}

const userService = new UserService()

export default userService