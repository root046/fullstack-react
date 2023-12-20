import { useEffect, useState } from "react"
import { getTodosByUsername } from "./api/ToDoApiService"

function ListToDosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

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
        getTodosByUsername('root')
            .then( response =>{
                console.log(response)
                setTodos(response.data)
            }
                )
            .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <h1>Things You Want To Do!</h1>
            <div>
                <table className='table'>
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
                                        <td>{todo.isDone.toString()}</td>
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

export default ListToDosComponent