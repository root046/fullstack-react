import { useParams, Link } from 'react-router-dom'
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

export default WelcomeComponent