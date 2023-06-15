import React from 'react';

import Accordion from "react-bootstrap/Accordion";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import { UrlButton, ImageEvent, } from "@merc/react-timeline";

import { i18n } from '../../../../translate/i18n'

import DtMoney from "../../../../assets/img/projects/dtmoney.png";
import L_REACT from "../../../../assets/img/skills/techs/react.svg";
import L_TS from "../../../../assets/img/skills/techs/typescript.svg"
import L_STYLED from "../../../../assets/img/skills/techs/styled.svg";
import L_MIRAGE from "../../../../assets/img/skills/techs/miragejs.svg";

import '../../projects-globalstyle.scss';

export const Dtmoney = () => {
    return(
        <>
            <ImageEvent date={i18n.t('projects.apps.dtmoney.date')} className="text-center" text="Dt Money" src={DtMoney} alt="Dt Money">
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
                                        <li>{i18n.t('projects.apps.dtmoney.firstline')}</li>
                                        <li>{i18n.t('projects.apps.dtmoney.secondline')}</li>
                                        <li>{i18n.t('projects.apps.dtmoney.thirtline')}</li>
                                    </ul>
                                    <hr />
                                    <strong>{i18n.t('projects.titles.techused')}:</strong>
                                    <ul>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_TS} alt="TypeScript" rounded className="image-style m-1" /> TypeScript
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
                                                <Image src={L_STYLED} alt="Styled-Components" rounded className="image-style1 m-1"/> Styled-Components
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                                <Image src={L_MIRAGE} alt="MirageJS" rounded className="image-style1 m-1"/> MirageJS
                                            </span>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/trpiano/dtmoney" className="button-url" target="_blank">
                            {i18n.t('projects.titles.source')}
                        </UrlButton>
                        <UrlButton href="https://dtmoney-swart.vercel.app" className="button-url" target="_blank">
                            {i18n.t('projects.titles.live')}
                        </UrlButton>
                    </div>
                </div>
            </ImageEvent>
        </>
    )
}