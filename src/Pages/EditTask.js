import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();
    const [editTask, setEditTasks] = useState([]);
    useEffect(() => {
        // fetch(`http://localhost:5000/task/${id}`)
            fetch(`https://lower-loonie-95654.herokuapp.com/task/${id}`)
            .then(res => res.json())
            .then(data => setEditTasks(data));
    }, [setEditTasks])
    const handleUpdate = e => {
        e.preventDefault();
        const task = e.target.task.value;
        const taskObject = { task };
        //send data to server
        // fetch('http://localhost:5000/task', {
        fetch('https://lower-loonie-95654.herokuapp.com/task', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Task Added Succesfully')
                e.target.reset();
            })
    }

    return (
        <div>
            <h3 className='container text-center my-5 bg-primary py-3  rounded text-white'>Edit Task</h3>

            <div className='text-center w-auto'>
                <form onSubmit={handleUpdate}>
                    <input className='text-center rounded' placeholder={editTask.task} type="text" name="task" id="" />
                    <button type="submit" className='px-3 mx-3 rounded'>Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditTask;