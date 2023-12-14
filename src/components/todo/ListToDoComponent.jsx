function ListToDosComponent() {
    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay())

    const todos = [
        { id: 1, description: 'Learn React', done: false, targetDate: targetDate },
        { id: 2, description: 'Learn FullStack Development', done: false, targetDate: targetDate },
        { id: 3, description: 'Learn SpringBoot', done: false, targetDate: targetDate },

    ]

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

export default ListToDosComponent