import React, { useState } from "react"
import App from "../App";

function NewTodoForm(props) {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    // const descriptionChange = (event) => {
    //     // console.log('Description: ', event.target.value);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     // console.log('Assigned: ', event.target.value);
    //     setAssigned(event.target.value);
    // }

    return (
        <div className="mt-4">
            <form>
                <div className='mb-3'>
                    <label className='form-label'> Assigned </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder="Assign to..."
                        required
                        value={assigned}
                        onChange={e => { setAssigned(e.target.value) }}
                    >
                    </input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'> Description </label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                </div>
                <button
                    type='button'
                    className='btn btn-primary mt-3'
                    onClick={submitTodo}
                >
                    Add Todo
                </button>
            </form>
        </div>
    )

}

export default NewTodoForm