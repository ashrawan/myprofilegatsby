import React from 'react';

import CustomImg from '../CustomImg';
import { myPortfolio } from '../../utils/data';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Projects = () => {
    return (
        <div>
            <section className="bg-light" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Projects Showcase</h2>
                            <h3 className="section-subheading text-muted">Imagination is more important than knowledge.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {myPortfolio.map((project, i) => (
                            <div key={i} className="col-md-3 col-sm-4 project-item">
                                <OutboundLink href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    <div className="project-hover">
                                        <div className="project-hover-content">
                                            <i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <CustomImg image={project.projectImage} />
                                </OutboundLink>
                                <div className="project-caption">
                                    <h5>{project.caption}</h5>
                                    <p className="text-muted">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );

};

export default Projects;