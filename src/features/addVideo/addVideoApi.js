import axios from "../../utils/axios";


export const addVideo = async () => {
    const response = axios.post('/videos')

    return response.data
}