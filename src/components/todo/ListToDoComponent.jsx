import { useEffect, useState } from "react"
import {deleteTodosByIdApi, getTodoByUsernameAndIdApi, getTodosByUsernameApi} from "./api/ToDoApiService"
import { useAuth } from "./security/AuthContext"
import {useNavigate} from "react-router-dom";

function ListToDosComponent() {

    const authContext = useAuth()
    const username = authContext.username

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])
    const [message,setMessage] = useState(null)

    const navigate = useNavigate()

    // const todos = [
    //     { id: 1, description: 'Learn React', done: false, targetDate: targetDate },
    //     { id: 2, description: 'Learn FullStack Development', done: false, targetDate: targetDate },
    //     { id: 3, description: 'Learn SpringBoot', done: false, targetDate: targetDate },

    // ]

    useEffect (
        // to load data when component is ready on render
        () => refreshTodos(),[]
    )

     function refreshTodos() {
        getTodosByUsernameApi(username)
            .then( response =>{
                console.log(response)
                setTodos(response.data)
            }
                )
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        console.log(id+'deleted')
        deleteTodosByIdApi(username,id)
            .then(
                () => {
                    setMessage(`Delete of todo with ${id} was successfully`)
                    refreshTodos()
                }

            )
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate('/todo/-1')
    }

    return (
        <div className='container'>
            <h1>Things You Want To Do!</h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Is Done ?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.isDone.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button> </td>
                                        <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button> </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='btn btn-success m-3' onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListToDosComponent