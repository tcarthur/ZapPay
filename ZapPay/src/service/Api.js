import axios from 'axios';

const api = axios.create({
    baseURL:'https://62c87c2d0f32635590d96d8d.mockapi.io/'
})

export default api;