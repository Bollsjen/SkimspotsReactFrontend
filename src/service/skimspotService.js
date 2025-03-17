import axios from '@/utils/axios'

export const skimspotService = {
    getSorted(sorting, limit){
        return axios.get(`skimspot/sorted/${sorting}/direction/asc/limit/${limit}`)
    }
}