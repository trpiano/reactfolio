import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Tilt from 'react-tilt';
import Card from "react-bootstrap/Card";
import grupotb from "../../assets/img/experience/grupotb.png";

import "./experience.style.css";

const Experience = () => {
    return(
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className='jumbo-style'>
                <Container>
                    <Tilt options={{ max: 25 }} />
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={grupotb} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style">Infrastructure and Development Intern.</strong>
                                    <br />
                                    <strong>Role:</strong>Techinical Support Intern & Developer
                                    <br/>
                                    <strong>Description: </strong>
                                    I work most of the time with technical support in infrastructure and 
                                    carrying out some small projects of responsive web development with PHP and ReactJS
                                    <br />
                                    <strong>Technology:</strong>PHP & React JS
                                    <br />
                                    <strong>Duration:</strong> May 2019 - Present
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;