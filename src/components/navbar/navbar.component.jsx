import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import I_EUA from "../../assets/icons/eua.png"
import I_BRASIL from "../../assets/icons/brasil.png"
import Logo from '../../assets/icons/logow.png'
import "./navbar.style.css"

import { i18n } from '../../translate/i18n';

const I18N_STORAGE_KEY = 'i18nextLng'

const NavBar = () => {
    const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    const handleSelectChange = event => {
      localStorage.setItem(
          I18N_STORAGE_KEY,
          event.target.value
      )
      window.location = window.location
    }

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
                        <Nav.Link href="#home">{i18n.t('navbar.titles.home')}</Nav.Link>
                        <Nav.Link href="#about">{i18n.t('navbar.titles.about')}</Nav.Link>
                        <Nav.Link href="#skills">{i18n.t('navbar.titles.skills')}</Nav.Link>
                        <Nav.Link href="#experience">{i18n.t('navbar.titles.experience')}</Nav.Link>
                        <Nav.Link href="#projects">{i18n.t('navbar.titles.projects')}</Nav.Link>
                        <Nav.Link href="#contact">{i18n.t('navbar.titles.contact')}</Nav.Link>
                        <NavDropdown className="dropdown-nav"  title="Idioma" onChange={handleSelectChange}>
                                <NavDropdown.Item className="dropdown-nav">
                                    <Nav.Link onClick="pt-BR">
                                        <img className="I_BRASIL" src={I_BRASIL} alt=""/>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="dropdown-nav">
                                    <Nav.Link onClick="en-US">
                                        <img className="I_EUA" src={I_EUA} alt="" />
                                    </Nav.Link>
                                </NavDropdown.Item>
                        </NavDropdown>
                        <select onChange={handleSelectChange}>
                            <option >Idioma</option>
                            <option value="pt-BR">PT</option>
                            <option value="en-US">EN</option>
                        </select>
                    </Nav> 
                </Navbar.Collapse>
             </div>
            </Navbar>
        </div>
    )
}

export default NavBar;