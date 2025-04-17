import axios from '@/utils/axios.js'

export const authService = {
    verify(){
        return axios.get(`auth/verify`)
    },
    
    login(user){
        return axios.post(`auth/login`, user)
    },
}