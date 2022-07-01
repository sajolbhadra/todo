import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Todo = () => {
    return (
        <div>
            <h1 className='text-center text-light py-3 bg-primary'>To do</h1>
            <Container>
                <InputGroup className="my-5 w-50 mx-auto">
                    <Form.Control
                        placeholder="Task"
                        aria-label="Task"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Add
                    </Button>
                </InputGroup>

            </Container>
        </div>
    );
};

export default Todo;