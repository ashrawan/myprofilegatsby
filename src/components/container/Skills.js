import React from 'react';

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
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Backend</h4>
                            <p className="text-muted">Java, Spring, Hibernate, Message Brokers - ActiveMQ, RabbitMQ , Security - JWT, Oauth2, Testing - Mockito.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Frontend</h4>
                            <p className="text-muted">JavaScript, Bootstrap, Angular, Rxjs, Material, React, ReactStrap, Redux.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Tools &amp; Technology</h4>
                            <p className="text-muted">Git, MySQL, Intellij, Jira, Heroku</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;