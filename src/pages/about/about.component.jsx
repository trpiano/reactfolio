import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/profile.webp'
import './about.style.css'

import { i18n } from '../../translate/i18n'

import Talk from '../../assets/icons/talk.webp'
import Resume from '../../assets/icons/resume.webp'
import GitHub from '../../assets/icons/github.webp'
import LinkedIn from '../../assets/icons/linkedin.webp'

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">{i18n.t('about.titles.app')}</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                       {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>

                        {/*About me description */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                {/* Description */}
                                {i18n.t('about.titles.initialp')} <strong>&nbsp;Timóteo Reinheimer Piano</strong>
                                <br />
                                {i18n.t('about.titles.firstp')}
                                <br />
                                {i18n.t('about.titles.secondp')}
                                <br />
                                {i18n.t('about.titles.thirtp')}
                                <br />
                                {i18n.t('about.titles.fourthp')}
                            </Row>
                            <Row>
                                {/* Buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <br/>
                                        <a className="m-2" href="#contact">
                                            <Button size="sm" variant="success">
                                                <img src={Talk} alt="Talk"/>    
                                                <p className="lb-button">{i18n.t('about.buttons.letstalk')}</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://drive.google.com/file/d/1KXjpJWJU-QYlcIvoNoAyM7GFqf3uGf1k/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="info">
                                                <img src={Resume} alt="Resume"/>
                                                <p className="lb-button">{i18n.t('about.buttons.cv')}</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://github.com/trpiano" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="dark">
                                                <img src={GitHub} alt="GitHub"/>
                                                <p className="lb-button">{i18n.t('about.buttons.github')}</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://www.linkedin.com/in/timóteo-reinheimer-piano-771606164/" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="primary">
                                                <img src={LinkedIn} alt="LinkedIn"/>
                                                <p className="lb-button">{i18n.t('about.buttons.linkedIn')}</p>
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About;