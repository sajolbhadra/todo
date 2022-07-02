import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const CompletedTask = () => {
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/completed-task')
            .then(res => res.json())
            .then(data => setCompletedTasks(data));
    }, [setCompletedTasks])
    return (
        <div>
            <h1>Task Completed</h1>
            <Container>

                {
                    completedTasks.map(task => <li
                        key={task._id}
                    >
                        {task.task}
                    </li>)
                }
            </Container>
        </div>
    );
};

export default CompletedTask;