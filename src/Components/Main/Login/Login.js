import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let navigateToRegister = e => {
        navigate('/register');
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || '/checkout';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    const loadingLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const provider = new GoogleAuthProvider();
    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='bg-white login pt-5'>
            <h2 className='text-primary  text-center'>Login Here</h2>
            <Form onSubmit={loadingLogin} className='container w-50 '>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {
                    loading && <p>loading...{ }...</p>
                }
                <Button variant="primary" type="submit">
                    Login
                </Button> { } &nbsp;
                <Button variant="success" className='my-3' type="submit" onClick={handleSignInGoogle}>
                    Sign In With Google
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