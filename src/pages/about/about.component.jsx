import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/profile.webp'
import './about.style.css'


import Talk from '../../assets/icons/talk.webp'
import Resume from '../../assets/icons/resume.webp'
import GitHub from '../../assets/icons/github.webp'
import LinkedIn from '../../assets/icons/linkedin.webp'

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
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
                                Hi there, I am <strong>&nbsp;Timóteo Reinheimer Piano</strong>

                                {/* Alterar desta linha para baixo. */}
                                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                                <br />
                                In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                {/* Alterar desta linha para cima. */}
                            </Row>
                            <Row>
                                {/* Buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <br/>
                                        <a className="m-2" href="#contact">
                                            <Button size="sm" variant="success">
                                                <img src={Talk} alt="Talk"/>    
                                                <p className="lb-button">Let's Talk</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://drive.google.com/file/d/14ylQdFor1fpGBp0rias62UaBeJEKVJX6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="info">
                                                <img src={Resume} alt="Resume"/>
                                                <p className="lb-button">My Resume</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://github.com/trpiano20" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="dark">
                                                <img src={GitHub} alt="GitHub"/>
                                                <p className="lb-button">GitHub</p>
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <br/>
                                        <a className="m-2" href="https://www.linkedin.com/in/timóteo-reinheimer-piano-771606164/" target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="primary">
                                                <img src={LinkedIn} alt="LinkedIn"/>
                                                <p className="lb-button">LinkedIn</p>
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