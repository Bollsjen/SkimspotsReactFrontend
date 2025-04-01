import axios from '@/utils/axios.js'

export const authService = {
    getUserObject(){
        return axios.get(`auth/`)
    }
}