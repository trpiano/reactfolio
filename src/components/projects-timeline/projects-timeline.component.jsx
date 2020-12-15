import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

//Import Projects
import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';

// skills
import L_REACT from "../../assets/img/skills/techs/react.svg";
import L_HTML5 from "../../assets/img/skills/techs/html-5.svg";
import L_CSS3 from "../../assets/img/skills/techs/css3.svg";
import L_REACTBOOT from "../../assets/img/skills/techs/react-bootstrap.svg";
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
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1" /> HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1" /> CSS3
                                                        </span>
                                                    </li>
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
                                                </ul>
                                                <hr />
                                                <strong>Libraries:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1" /> HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                        <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1" /> CSS3
                                                        </span>
                                                    </li>
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
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    </Accordion>
                                </div>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    <UrlButton href="https://github.com/trpiano20/myportfolio" target="_blank">
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