import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import I_EUA from "../../assets/icons/eua.png"
import I_BRASIL from "../../assets/icons/brasil.png"
import Logo from '../../assets/icons/logow.png'
import "./navbar.style.css"


const NavBar = () => {
    return(
        <div>
            <Navbar 
            fixed="top" 
            collapseOnSelect expand="md" 
            variant="dark" 
            className="animate-navbar nav-theme justify-content-between"
            >
                <div>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={Logo} alt=""/>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown className="dropdown-nav" title="Idioma">
                                <NavDropdown.Item className="dropdown-nav" href="#action">
                                    <img className="I_BRASIL" src={I_BRASIL} alt=""/>
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdown-nav" href="#action2">
                                    <img className="I_EUA" src={I_EUA} alt=""/>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;