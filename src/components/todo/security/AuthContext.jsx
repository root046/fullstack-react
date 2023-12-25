import { createContext, useContext, useState } from "react";
import {executeBasicAuthenticationService} from "../api/ToDoApiService";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    // const [number, setNumber] = useState(10)

    //3:Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    // setInterval(() => setNumber(number + 1), 10000)

    // const valueToBeShared = { number, isAuthenticated, setAuthenticated }

    // function login(username, password) {
    //     if (username === 'root' && password === '0000') {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    function login(username, password) {

        const vaToken = 'Basic ' + window.btoa(username + ":" + password)

        executeBasicAuthenticationService(vaToken)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        setAuthenticated(false)

        // if (username === 'root' && password === '0000') {
        //     setAuthenticated(true)
        //     setUsername(username)
        //     return true
        // } else {
        //     setAuthenticated(false)
        //     setUsername(null)
        //     return false
        // }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout,username }}>
            {children}
        </AuthContext.Provider>
    )
} 
