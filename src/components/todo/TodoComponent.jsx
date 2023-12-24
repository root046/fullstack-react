import {useParams} from "react-router-dom";
import {getTodoByUsernameAndIdApi} from "./api/ToDoApiService";
import {useAuth} from "./security/AuthContext";
import {useEffect, useState} from "react";

export default function TodoComponent() {

    const authContext = useAuth()
    const username = authContext.username

    const {id} = useParams()

    const[description,setDescription] = useState('')


    useEffect(
        (username, id) => retrieveTodos(),
    )
    function retrieveTodos(){
        getTodoByUsernameAndIdApi(username,id)
            .then(responce => {
                setDescription(responce.data.description)
            })
            .catch(error => console.log(console.log(error)))
    }
    return (
        <div className='container'>
            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}