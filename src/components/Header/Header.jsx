import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/logo-1.png'

const Header = () => {
    // const [colorChange, setColorchange] = useState(false);
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 10) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    // className={colorChange ? 'topbar_inner py-3' : ' py-3'}
    return (
        <Navbar expand="lg" fixed="top" className='py-3'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="" className='img-fluid logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                        <Nav.Link href="#programs-section">Programs</Nav.Link>
                        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                        <NavLink to="/news" className="nav-link">News</NavLink>
                        <NavLink to="/faqs" className="nav-link">Faqs</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;