import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/home'><strong>Shutters-</strong><span>Stacker</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto px-5">
                        <Nav.Link href="#home">
                            <Link className="py-2 px-3 mx-1 routes" to='/home'>Home</Link>
                        </Nav.Link>


                        <Nav.Link href="#services">
                            <Link className="py-2 px-3 mx-1 routes" to='/services'>Services</Link>
                        </Nav.Link>


                        <Nav.Link href="#checkout">
                            <Link className="py-2 px-3 mx-1 routes" to='/checkout'>Checkout</Link>
                        </Nav.Link>


                        <Nav.Link href="#blogs">
                            <Link className="py-2 px-3 mx-1 routes" to='/blogs'>Blogs</Link>
                        </Nav.Link>


                        <Nav.Link href="#aboutme">
                            <Link className="py-2 px-3 mx-1 routes" to='/aboutme'>About Me</Link>
                        </Nav.Link>


                        <Nav.Link href="#login">
                            {
                                user ?

                                    <Link className="py-2 px-3 mx-1 routes" to='/login'>Login</Link>
                                    :
                                    <button>Sign Out</button>}
                        </Nav.Link>




                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>




    );
};

export default Header;