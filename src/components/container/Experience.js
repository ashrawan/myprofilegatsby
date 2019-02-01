import React from 'react';

const Experience = () => {

    const experiences = [
        {
            "companyName": "F1Soft International Pvt. Ltd",
            "companyLogo": "",
            "companyWebsite": "",
            "position": "Software Engineer",
            "period": "",
            "tools": [
                { "name": "", "image": "" },
                { "name": "", "image": "" },
                { "name": "", "image": "" },
            ]
        },
        {
            "companyName": "IAESTE NEPAL – Civil Initiative",
            "companyLogo": "",
            "companyWebsite": "",
            "position": "Volunteer",
            "period": "",
            "tools": [
                { "name": "", "image": "" },
            ]
        },
        {
            "companyName": "Blogger & Contributor",
            "companyLogo": "",
            "companyWebsite": "",
            "position": "Enthusiastic",
            "period": "",
            "tools": [
                { "name": "", "image": "" },
            ]
        },

    ];

    return (
        <div>
            <section className="bg-light" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Professional Experience</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {experiences.map((data, i) => (
                            <div key={i} className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle" src={data.companyLogo} alt={data.companyName} />
                                    <a href={data.companyWebsite} target="_blank" rel="noopener noreferrer"><h4>{data.companyName}</h4></a>
                                    <p className="text-muted">{data.position}</p>
                                    <ul className="list-inline social-buttons">
                                        {data.tools.map((tool, i) => (
                                            <li key={i} className="list-inline-item">
                                                {/* <i className="fab fa-twitter"></i> */}
                                                <img src={tool.image} alt={tool.name} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience;