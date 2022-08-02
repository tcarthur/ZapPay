import axios from 'axios';

const api = axios.create({
    baseURL:'http://sgw.zapgrafica.com.br:8081'
})

export default api;