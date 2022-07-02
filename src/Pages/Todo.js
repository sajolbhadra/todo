import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Todo = () => {
    const taskAlert = `<div class="w-50 mx-auto alert alert-primary d-flex align-items-center" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlinkHref="#info-fill" /></svg>
                    <div className=' mx-auto'>
                        Task Added Successfully
                    </div>
                </div>`;
    const DeleteTask = _id => {
        const confirm = window.confirm('Want to Delete Task from TODO');
        if (confirm) {
            const url = `http://localhost:5000/task/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            console.log('deleteing ', _id)
        }
    }
    const handleAddTask = event => {
        event.preventDefault();
        const task = event.target.task.value;
        const taskObject = { task };
        // console.log(task, taskObject)

        //send data to server
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskObject)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Task Added Succesfully')
                event.target.reset();
            })

    }
    const handleCompletedTask = _id => {
        //send data to server
        fetch('http://localhost:5000/completed-task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks._id)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('Task Added Succesfully')
            })
        const url = `http://localhost:5000/task/${_id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        console.log('deleteing ', _id)

    }


    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [setTasks])
    return (
        <div>
            <h1 className='text-center text-light py-3 bg-primary'>To do</h1>
            <Container>
                <form className='text-center my-4 ' onSubmit={handleAddTask}>
                    <input type="text" name="task" placeholder='Task' required id="" />
                    <input type="submit" value="Add Task" />
                </form>
            </Container>
            <Container>
                {
                    tasks.map(task => <li className='my-2 text-decoration-none'
                        key={task._id}
                    >
                        <input type="checkbox" className='mx-3' onChange={() => handleCompletedTask(task._id)} name={task._id} id="" />
                        {task.task}
                        <Button className='mx-3' onClick={() => DeleteTask(task._id)}>Delete</Button>
                    </li>)
                }
            </Container>
        </div>
    );
};

export default Todo;