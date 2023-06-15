import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './skills.styles.scss';
import { skills } from './skills.data'
import { i18n } from '../../translate/i18n'

const Skills = () => {
  return (
      <div className="pt33 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">{i18n.t('techskills.titles.app')}</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    {/* Frontend */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.front')}</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.frontend.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                     </Card>
                    </Col>
                    <Col md={4}>
                    {/* Backend */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.back')}</Card.Title>
                                 <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skills.backend.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Programming Languages */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.languages')}</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skills.programmingLanguages.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        {/* Database */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.database')}</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.databases.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                        <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                            <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                        </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Hosting Platforms */}
                        <Card className="focus mt-2 mb-2 ">
                             <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.hosting')}</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skills.hostingPlatforms.map((skill, index) => (
                                        <span className="p-2" key={index}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                            </a>
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Version Control */}
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">{i18n.t('techskills.cards.version')}</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    <span className="p-2">
                                        <a className="text-dark text-decoration-none" href={skills.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skills.versionControl[0].imgSrc} alt={skills.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skills.versionControl[0].skillName}
                                        </a>
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
      </div>
  )
}

export default Skills;