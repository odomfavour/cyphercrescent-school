import React, { useState } from 'react';
import './header.css'
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <Navbar expand="lg" fixed="top" className={colorChange ? 'topbar_inner py-3' : 'topbar_inner py-3'}>
            <Container>
                <Navbar.Brand href="#">
                    logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#instruments">Programs</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#contact">Sign Up</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto my-2 my-lg-0">
                        <Nav.Link href="#contact">Sign-in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;