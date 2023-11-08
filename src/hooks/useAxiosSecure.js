import axios from "axios"

const axiosSecure = axios.create({
    baseURL: 'https://study-buddy-hub-server-side.vercel.app/',
    withCredentials: true,
})

export default axiosSecure;