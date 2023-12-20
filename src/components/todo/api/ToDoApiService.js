import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8082'
    }
);

export const getTodosByUsername
    = (username) => apiClient.get(`/users/${username}/todos`, {
        auth: {
            username: 'root',
            password: '0000'
        }
    })