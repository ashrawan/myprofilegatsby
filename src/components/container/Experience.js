import React from 'react';
import { experiences } from '../../utils/data';
import CustomImg from '../CustomImg';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Experience = () => {

    return (
        <>
            <section className="" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Professional Experience &amp; Tracks</h2>
                            <h3 className="section-subheading text-muted">Future comes one day at a time.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {experiences.map((company, i) => (
                            <div key={i} className="col-sm-4">
                                <div className="team-member">
                                    <CustomImg image={company.companyLogo} />
                                    <OutboundLink href={company.companyWebsite} target="_blank" rel="noopener noreferrer">
                                        <h4>{company.companyName}</h4>
                                    </OutboundLink>
                                    <p className="text-muted">{company.position}</p>
                                    <ul className="list-inline social-buttons">
                                        {company.toolsImage.map((tool, i) => (
                                            <li key={i} className="list-inline-item">
                                                <CustomImg image={tool} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">If you can dream it, you can become it.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;