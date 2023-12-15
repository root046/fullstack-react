import { createContext, useContext, useState } from "react";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    // const [number, setNumber] = useState(10)

    //3:Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval(() => setNumber(number + 1), 10000)

    // const valueToBeShared = { number, isAuthenticated, setAuthenticated }

    function login(username, password) {
        if (username === 'test' && password === '0000') {
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
} 
