import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import NotFoundComponent from './NotFoundComponent'
import ListToDosComponent from './ListToDoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute({ children }) {
    const authenContext = useAuth()

    if (authenContext.isAuthenticated)
        return children

    return <Navigate to="/"></Navigate>
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path='/login' element={<LoginComponent />}></Route>

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>}>
                        </Route>

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListToDosComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }></Route>

                        <Route path='*' element={<NotFoundComponent />}></Route>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}