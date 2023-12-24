import {useNavigate, useParams} from "react-router-dom";
import {getTodoByUsernameAndIdApi, updateTodoApi} from "./api/ToDoApiService";
import {useAuth} from "./security/AuthContext";
import {useEffect, useState} from "react";
import {Form, Field, Formik, ErrorMessage} from 'formik'

export default function TodoComponent() {

    const authContext = useAuth()
    const navigate = useNavigate()
    const username = authContext.username

    const {id} = useParams()

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')


    useEffect(
        (username, id) => retrieveTodos(),
    )

    function retrieveTodos() {
        getTodoByUsernameAndIdApi(username, id)
            .then(responce => {
                setDescription(responce.data.description)
                setTargetDate(responce.data.targetDate)
            })
            .catch(error => console.log(console.log(error)))
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            isDone: false,

        }

        console.log(todo)

        updateTodoApi(username,id,todo)
            .then(responce => {
                navigate('/todos')
            })
            .catch(error => console.log(console.log(error)))
    }

    function validate(values) {
        let errors = {
            // description: 'Enter a Valid Description',
            // targetDate: 'Enter a Valid Target Date'
        }

        if(values.description.length<5){
            errors.description = 'Description Must be more than 4 characters'
        }

        if (values.targetDate == null) {
            errors.targetDate = 'Must enter date!';
        } else {
            // Convert the targetDate string to a Date object
            const targetDate = new Date(values.targetDate);

            // Get the start of the current day
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            // Check if the targetDate is before the start of the current day
            if (targetDate < currentDate) {
                errors.targetDate = 'Date must be today or in the future!';
            }
        }

        return errors
    }

    return (
        <div className='container'>
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name='description'
                                    component='div'
                                    className='alert alert-warning'
                                />

                                <ErrorMessage
                                    name='targetDate'
                                    component='div'
                                    className='alert alert-warning'
                                />

                                <fieldset className='form-group'>
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                </fieldset>

                                <fieldset className='form-group'>
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                </fieldset>

                                <div>
                                    <button className='btn btn-success m-5' type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}