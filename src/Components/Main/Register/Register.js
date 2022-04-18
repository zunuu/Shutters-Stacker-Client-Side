import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    let navigateToLogin = e => {
        navigate('/login')
    }

    const loadingRegister = e => {
        e.preventDefault();
    }

    return (
        <div className='register'>
            <Form onSubmit={loadingRegister} className=' container w-50 pt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Your Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="Enter your phone number" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Register
                </Button>
                <p className='fw-bold mt-3'>Already have an account? <span onClick={navigateToLogin}>

                    <Link to="login" className='text-danger fw-bold '>
                        Login Here
                    </Link>
                </span></p>
            </Form>

        </div>
    );
};

export default Register;