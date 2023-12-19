import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { getHelloWorld } from './api/HelloWorldApiService'

function WelcomeComponent() {

    const { username } = useParams()
    const [message, setMessage] = useState(null)


    function callHelloWorldRestApi() {
        //axios
        getHelloWorld()
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanUp'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="Login">
            <h1>Welcome {username} To ToDo Application</h1>
            <div>
                Manage Your Todos - <Link to='/todos'>Go Here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>Call Hello World REST API</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomeComponent