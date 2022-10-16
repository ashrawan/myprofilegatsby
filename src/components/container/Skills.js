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
                            <h2 className="section-heading text-uppercase">Core Technical Skills</h2>
                            <h3 className="section-subheading text-muted">Full Stack Software Developer</h3>
                        </div>
                    </div>
                    <div className="row text-center tech-icons">
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'layer-group']} />
                            <h4 className="service-heading">Backend</h4>
                            <p className="text-muted">Java, Spring 5, Hibernate, Kafka, RabbitMQ, Spring Security, Social-Sign-On, Unit Testing.</p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'desktop']} />
                            <h4 className="service-heading">Frontend</h4>
                            <p className="text-muted">JavaScript, Angular, Rxjs, React, Redux, HTML5, CSS3, Bootstrap.</p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon="fa-solid fa-database" />
                            <h4 className="service-heading">Database</h4>
                            <p className="text-muted">MySQL, MongoDB, ElasticSearch, Redis</p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={['fas', 'cubes']} />
                            <h4 className="service-heading">Apps &amp; Platform</h4>
                            <p className="text-muted">Intellij, VS Code Jira, Heroku, Postman, Windows, Linux, AWS (EC2, RDS, S3), Google Cloud </p>
                        </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                            <h4 className="service-heading">Tools</h4>
                            <p className="text-muted">Git, Docker, Kubernetes, Maven, GKE, Zipkin, Prometheus, Grafana, Tomcat, Nginx, Liquibase</p>
                        </div>

                    </div>
                </div>
            </section>
            <Tools />
        </div>
    );
};

export default Skills;