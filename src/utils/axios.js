import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://localhost:7042/api',
    timeout: 15000,
    withCredentials: true
})

export default instance