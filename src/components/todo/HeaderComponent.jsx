import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
function HeaderComponent() {
    // const authContext = useContext(AuthContext)
    const authContext = useAuth()
    console.log(authContext.number)
    return (

            < header className = "border-bottom border-light border-5 mb-5 p-2" >
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="nav-link" to="/welcome/bader">Home</Link>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                                </ul>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    )
}

export default HeaderComponent