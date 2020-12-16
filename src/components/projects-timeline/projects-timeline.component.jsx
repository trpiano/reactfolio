import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

//Import Projects
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

// skills
import L_REACT from "../../assets/img/skills/techs/react.svg";
import L_JS from "../../assets/img/skills/techs/javascript.svg"
import L_REACTBOOT from "../../assets/img/skills/techs/react-bootstrap.svg";
import L_STYLED from "../../assets/img/skills/techs/styled-comp.png";
import Image from "react-bootstrap/Image";

//Projects
import ReactFolio from "../../assets/img/projects/reactfolio.webp"

//CSS File
import "./projects-timeline.style.css"

const ProjectTimeline = () => {
    return(
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
                <Timeline>
                    <Events>

                        {/* Project: */}
                        <ImageEvent date="02/10/2020" className="text-center" text="ReactFolio" src={ReactFolio} alt="ReactFolio">
                            <div className="d-flex justify-content-between flex-column mt-1">
                                <div>
                                    <Accordion>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                        PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> 
                                                <ul className="list-styles pt-1">
                                                    <li>SPA created using the ReactJS library;</li>
                                                    <li>Hosting with production environment and testing environment using Vercel hosting.</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_JS} alt="JavaScript" rounded className="image-style m-1" /> JavaScript
                                                        </span>
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Libraries:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACT} alt="React" rounded className="image-style1 m-1" /> React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image src={L_REACTBOOT} alt="React BootStrap" rounded className="image-style1 m-1" /> React BootStrap
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
                                    SOURCE CODE
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