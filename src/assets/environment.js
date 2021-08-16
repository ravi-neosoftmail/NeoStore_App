import axios from 'axios';

export const environment = {
    apiBase  : 'https://neostore-api.herokuapp.com'
}

export const instance = axios.create({
    baseUrl: 'https://neostore-api.herokuapp.com'
})