import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const CompletedTask = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/completed-task')
        fetch('https://lower-loonie-95654.herokuapp.com/completed-task')
            .then(res => res.json())
            .then(data => setCompletedTasks(data));
    }, [setCompletedTasks])
    console.log(completedTasks)
    return (
        <div>
            <h1 className='text-center text-light py-3 bg-primary'>Task Completed</h1>
            <Container>

                {
                    completedTasks.map(task => <li
                        key={task._id}
                    >
                        {task.completedTasks}
                    </li>)
                }
            </Container>
        </div>
    );
};

export default CompletedTask;