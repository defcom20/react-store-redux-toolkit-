import axios from 'axios';
const BASE_URL = 'https://laravel-api-v1.herokuapp.com/api';

const token = window.localStorage.getItem('token');

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(token)}`
    },
});