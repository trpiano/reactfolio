import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

import { i18n } from '../../translate/i18n';

import L_REACT from "../../assets/img/skills/techs/react.svg";
import L_JS from "../../assets/img/skills/techs/javascript.png"
import L_REACTBOOT from "../../assets/img/skills/techs/react-bootstrap.svg";
import L_STYLED from "../../assets/img/skills/techs/styled-comp.png";
import Image from "react-bootstrap/Image";

import ReactFolio from "../../assets/img/projects/reactfolio.webp";

import "./projects-timeline.style.css"

const ProjectTimeline = () => {
    return(
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">{i18n.t('projects.titles.app')}</h1>
                <Timeline>
                    <Events>
                        {/* Project: */}
                        <ImageEvent date={i18n.t('projects.apps.date')} className="text-center" text="ReactFolio" src={ReactFolio} alt="ReactFolio">
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                            {i18n.t('projects.titles.projectdetails')}
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>{i18n.t('projects.titles.description')}:</strong> 
                                                <ul className=" pt-1">
                                                    <li>{i18n.t('projects.apps.firstline')}</li>
                                                    <li>{i18n.t('projects.apps.secondline')}</li>
                                                </ul>
                                                <hr />
                                                <strong>{i18n.t('projects.titles.techused')}:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_JS} alt="JavaScript" rounded className="image-style m-1" /> JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>{i18n.t('projects.titles.libraries')}:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"/> ReactJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACTBOOT} alt="React BootStrap" rounded className="image-style1 m-1"/> React BootStrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_STYLED} alt="Styled-Components" rounded className="image-style1 m-1"/> Styled-Components
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton href="https://github.com/trpiano/reactfolio" target="_blank">
                                        {i18n.t('projects.titles.source')}
                                    </UrlButton>
                                </div>
                            </div>
                        </ImageEvent>
                    </Events>
                </Timeline>
        </div>
    )
}

export default ProjectTimeline;