import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shutters-<span>Stacker</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto px-5">
                        <Nav.Link className=" px-3 mx-1 routes" href="#features">Home</Nav.Link>
                        <Nav.Link className=" px-3 mx-1 routes" href="#pricing">Services</Nav.Link>
                        <Nav.Link className=" px-3 mx-1 routes" href="#features">Check Out</Nav.Link>
                        <Nav.Link className=" px-3 mx-1 routes" href="#pricing">Login</Nav.Link>
                        <Nav.Link className=" px-3 mx-1 routes" href="#features">Blogs</Nav.Link>
                        <Nav.Link className=" px-3 mx-1 routes" href="#pricing">About Me</Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>

        </Navbar>




    );
};

export default Header;