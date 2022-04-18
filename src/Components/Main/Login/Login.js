import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    let navigateToRegister = e => {
        navigate('/register');
    }

    const loadingLogin = e => {
        e.preventDefault();
    }


    return (
        <div className='bg-white login pt-5'>
            <h2 className='text-primary  text-center'>Login Here</h2>
            <Form onSubmit={loadingLogin} className='container w-50 '>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='fw-bold mt-3'>new to Shutters-Stacker? <span onClick={navigateToRegister}>

                    <Link to="register" className='text-danger fw-bold'>
                        Register Here
                    </Link>
                </span></p>
            </Form>

        </div>
    );
};

export default Login;