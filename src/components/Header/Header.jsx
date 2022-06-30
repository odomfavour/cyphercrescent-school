import React, { useEffect } from 'react';
import './header.css'
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/CCLD.png'
// import logo from '../../images/about/cc-logo.png'
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Header = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

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
        <Navbar expand="lg" fixed="top" className='py-1'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="" className='img-fluid logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="ms-auto">
                        <Nav className="top-nav d-flex justify-content-end">
                            <Nav.Link href="https://ccl-flamingo-dev.netlify.app/" target='_blank'>Energy Services <BsBoxArrowUpRight/></Nav.Link>
                            <Nav.Link href="http://www.cyphercrescent.tech/" target='_blank'>Information Technology <BsBoxArrowUpRight/></Nav.Link>
                            <Nav.Link href="http://www.cyphercrescent.com.ng" target='_blank'>CypherCrescent E&P <BsBoxArrowUpRight/></Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0 bottom-nav"
                            navbarScroll
                        >
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About Us</NavLink>
                            <NavLink to="/programs" className='nav-link'>Programs</NavLink>
                            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                            <NavLink to="/news" className="nav-link">News</NavLink>
                            <NavLink to="/faqs" className="nav-link">FAQ</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;