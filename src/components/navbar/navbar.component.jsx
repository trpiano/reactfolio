import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LangPicker } from '../language-picker/languagepicker'

import Logo from '../../assets/icons/logow.svg'
import "./navbar.style.css"

import { i18n } from '../../translate/i18n';

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
                            <Nav.Link href="#home">{i18n.t('navbar.titles.home')}</Nav.Link>
                            <Nav.Link href="#about">{i18n.t('navbar.titles.about')}</Nav.Link>
                            <Nav.Link href="#skills">{i18n.t('navbar.titles.skills')}</Nav.Link>
                            <Nav.Link href="#experience">{i18n.t('navbar.titles.experience')}</Nav.Link>
                            <Nav.Link href="#projects">{i18n.t('navbar.titles.projects')}</Nav.Link>
                            <Nav.Link href="#contact">{i18n.t('navbar.titles.contact')}</Nav.Link>
                            <Nav.Link>
                                <LangPicker />
                            </Nav.Link>
                        </Nav> 
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar;