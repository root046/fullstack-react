import {useAuth} from "../security/AuthContext";
import {apiClient} from "./ApiClient";

export const getTodosByUsernameApi
    = (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodosByIdApi
    = (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const getTodoByUsernameAndIdApi
    =(username,id) => apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoApi
    =(username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApi
    =(username,todo) => apiClient.post(`/users/${username}/todos`, todo)

export const executeBasicAuthenticationService
    =(token) => apiClient.get(`/basicauth`,
    {
        headers: {
            Authorization: token
        }
    }
)