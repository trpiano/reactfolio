import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css"

import { i18n } from "../../translate/i18n"

const ContactFrom = () => {
    return(
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">{i18n.t("contact.titles.app")}</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:timoteopiano@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="timoteopiano@gmail.com">
                                    <i className="fas fa-envelope-square"></i> {i18n.t("contact.titles.mail")}
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/timóteo-reinheimer-piano-771606164/" target='_blank' rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit mt LinkedIn">
                                    <i className="fab fa-linkedin"></i> {i18n.t("contact.titles.linkedIn")}
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://github.com/trpiano" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="Mu other projects">
                                    <i className="fab fa-github-square"></i> {i18n.t("contact.titles.github")}
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.facebook.com/timoteo.piano.9/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FaceBook">
                                    <i className="fab fa-facebook-square"></i> {i18n.t("contact.titles.fb")}
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default ContactFrom;