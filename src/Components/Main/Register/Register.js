import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init'

const Register = () => {
    // const auth = getAuth();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    let navigateToLogin = e => {
        navigate('/login')
    }

    const loadingRegister = e => {
        e.preventDefault();
        console.log(e.target.email.value);
        const name = e.target.text.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(password, email);
    }

    return (
        <div className='register'>
            <Form onSubmit={loadingRegister} className=' container w-50 pt-5'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name="text" placeholder="Your Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Control type="number" name="number" placeholder="Enter your phone number" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="password" placeholder="Password" required />
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