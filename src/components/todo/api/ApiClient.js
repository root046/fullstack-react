import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8082'
    }
);

export const apiClient2 = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);