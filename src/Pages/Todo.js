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
                </div>`
    const handleTask = event => {
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
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-light py-3 bg-primary'>To do</h1>
            <Container>
                {/* <InputGroup onClick={handleTask}  className="my-5 w-50 mx-auto">
                    <Form.Control onSubmit={handleTask}
                        placeholder="Task"
                        aria-label="Task"
                        name="task"
                        aria-describedby="basic-addon2"
                        required                    />
                    <Button onSubmit={handleTask} variant="outline-secondary" id="button-addon2">
                        Add
                    </Button>
                </InputGroup> */}

                <form className='text-center my-4 ' onSubmit={handleTask}>
                    <input type="text" name="task" placeholder='Task' required id="" />
                    <input type="submit" value="Add Task" />
                </form>
            </Container>
            <Container>
                {
                    tasks.map(task=> <li className='my-2 text-decoration-none'
                    key={task._id}
                    >{task.task}</li>)
                }
            </Container>
        </div>
    );
};

export default Todo;