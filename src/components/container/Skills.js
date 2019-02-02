import React from 'react';
import Tools from './Tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return (
        <div>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Technical Skills</h2>
                            <h3 className="section-subheading text-muted">Full Stack Software Developer</h3>
                        </div>
                    </div>
                    <div className="row text-center tech-icons">
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'layer-group']} />
                            <h4 className="service-heading">Backend</h4>
                            <p className="text-muted">Java, Spring, Hibernate, Message Brokers - ActiveMQ, RabbitMQ , Security - JWT, Oauth2, Testing - Mockito.</p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'desktop']} />
                            <h4 className="service-heading">Frontend</h4>
                            <p className="text-muted">JavaScript, Bootstrap, Angular, Rxjs, Material, React, ReactStrap, Redux.</p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'cubes']} />
                            <h4 className="service-heading">Tools &amp; Technology</h4>
                            <p className="text-muted">Git, MySQL, Intellij, Jira, Heroku</p>
                        </div>
                    </div>
                </div>
            </section>
            <Tools/>
        </div>
    );
};

export default Skills;