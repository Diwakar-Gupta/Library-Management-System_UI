import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import './login.css';
const axios =  require('axios');

function Login() {
    const [enteredId, setId] = useState('');
    const [enteredPassword, setPassword] = useState('');
  
    const IdChangeHandler = (event) => {
      setId(event.target.value);
    };
  
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
        //reset the values of input fields
        
        axios.post('/auth/login/', {
            username: enteredId,
            password: enteredPassword,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

  return (
    <Card className="auth_form">
      <Card.Header as="h5">LMS Login</Card.Header>
      <Card.Body>
        <Form onSubmit={submitHandler}>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={enteredId} onChange={IdChangeHandler} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control value={enteredId} onChange={IdChangeHandler} type="username" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={enteredPassword} onChange={passwordChangeHandler} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;