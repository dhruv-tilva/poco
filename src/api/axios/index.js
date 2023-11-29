import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8055",
    timeout: 30000
})

export default axiosClient