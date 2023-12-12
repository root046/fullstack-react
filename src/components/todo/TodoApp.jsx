import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('test')
    const [password, setPassword] = useState('0000')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === 'test' && password === '0000') {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')
        } else {
            console.log('Faild')
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
        }
    }

    return (
        <div className="Login">
            {showSuccessMessage &&  <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>login</button>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="Login">
            Welcome Component
        </div>
    )
}