import axios from 'axios'
import {useAuth} from "../security/AuthContext";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8082'
    }
);

export const getTodosByUsernameApi
    = (username) => apiClient.get(`/users/${username}/todos`, {
        auth: {
            username: 'root',
            password: '0000'
        }
    })

export const deleteTodosByIdApi
    = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`,{
        auth: {
            username: 'root',
            password: '0000'
        }
})

export const getTodoByUsernameAndIdApi
    =(username,id) => apiClient.get(`/users/${username}/todos/${id}`,{
        auth: {
            username: 'root',
            password: '0000'
        }
})

export const updateTodoApi
    =(username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,
    todo,
    {
        auth: {
            username: 'root',
            password: '0000'
        }
    }
)

export const createTodoApi
    =(username,todo) => apiClient.post(`/users/${username}/todos`,
    todo,
    {
        auth: {
            username: 'root',
            password: '0000'
        }
    }
)