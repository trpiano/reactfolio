import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Tilt from 'react-tilt';
import Card from "react-bootstrap/Card";
import grupotb from "../../assets/img/experience/grupotb.png";

import { i18n } from '../../translate/i18n';

import "./experience.style.css";

const Experience = () => {
    return(
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">{i18n.t('experience.titles.app')}</h1>
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
                                    <strong className="body-title-style ">{i18n.t('experience.companies.firstexp.role')}</strong>
                                    <br />
                                    <strong>{i18n.t('experience.titles.description')}: </strong>
                                    {i18n.t('experience.companies.firstexp.desctext')}
                                    <br />
                                    <strong>{i18n.t('experience.titles.tech')}:</strong> React JS
                                    <br />
                                    {i18n.t('experience.companies.firstexp.date')}
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