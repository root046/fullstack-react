import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListToDosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent/>}></Route>
                    <Route path='*' element={<NotFoundComponent />}></Route>
                </Routes>
            </BrowserRouter>

            <FooterComponent/>


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
            navigate(`/welcome/${username}`)
        } else {
            console.log('Faild')
            setShowErrorMessage(true)
            setShowSuccessMessage(false)
        }
    }

    return (
        <div className="Login">
            <h1>Time To Login!</h1>

            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
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
    const { username } = useParams()
    console.log(username)
    return (
        <div className="Login">
            <h1>Welcome {username} To ToDo Application</h1>
            <div>
                Manage Your Todos - <Link to='/todos'>Go Here</Link>
            </div>
        </div>
    )
}

function NotFoundComponent() {
    return (
        <div className='NotFoundComponent'>
            <h1>Not Found 404</h1>
        </div>
    )
}

function ListToDosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+1,today.getMonth(),today.getDay())

    const todos = [
        { id: 1, description: 'Learn React',done:false,targetDate:targetDate },
        { id: 2, description: 'Learn FullStack Development',done:false,targetDate:targetDate },
        { id: 3, description: 'Learn SpringBoot',done:false,targetDate:targetDate },

    ]

    return (
        <div className='ListToDosComponent'>
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>Is Done ?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <div className='HeaderComponent'>
            Header<hr/>
        </div>
    )
}

function FooterComponent(){
    return(
        <div className='FooterComponent'>
            <hr/>Footer
        </div>
    )
}

function LogoutComponent(){
    return(
        <div className='LogoutComponent'>
            <h1>You Are Logged Out!</h1>
            <div>
            Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}