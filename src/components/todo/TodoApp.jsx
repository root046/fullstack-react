import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './TodoApp.css'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import NotFoundComponent from './NotFoundComponent'
import ListToDosComponent from './ListToDoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListToDosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>
                    <Route path='*' element={<NotFoundComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}