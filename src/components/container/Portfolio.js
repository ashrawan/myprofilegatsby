import React from 'react';
import leaveManagement from './../../assets/img/leave-management.png';
import iaesteVolunteer from './../../assets/img/iaeste-volunteer1.png';
// import rabbitmqSample from './../../assets/img/rabbitmq-sample.PNG';
import reactFileupload from './../../assets/img/react-fileupload.png';
import srcMockito from './../../assets/img/srcmockito.png';

const Portfolio = () => {

    const myPortfolio = [
        {
            "image": leaveManagement,
            "caption": "Leave Management",
            "link": "",
            "desc": "Spring, Angular 6, MySQL",
        },
        {
            "image": iaesteVolunteer,
            "caption": "IAESTE Volunteer",
            "link": "",
            "desc": "Spring, React, Redux, MySQL",
        },
        {
            "image": srcMockito,
            "caption": "RabbitMQ Demo Sample",
            "link": "",
            "desc": "Spring, RabbitMQ",
        },
        {
            "image": reactFileupload,
            "caption": "Simple File Upload",
            "link": "",
            "desc": "Spring, React, MYSQL",
        },
        {
            "image": srcMockito,
            "caption": "Unit Testing Sample",
            "link": "",
            "desc": "Spring, Mockito, Testing",
        },
        {
            "image": reactFileupload,
            "caption": "Medium Blogger",
            "link": "",
            "desc": "The Comprehensive Guide to JavaScript",
        },
        {
            "image": reactFileupload,
            "caption": "Medium Blogger",
            "link": "",
            "desc": "Understanding Mockito, The Overview",
        }
    ];

    return (
        <div>
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Projects Showcase</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {myPortfolio.map((data, i) => (
                            <div key={i} className="col-md-3 col-sm-4 portfolio-item">
                                <a className="portfolio-link" target="_blank" rel="noopener noreferrer" href={data.link}>
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content">
                                            <i className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img className="img-fluid" src={data.image} alt="Leave Management" />
                                </a>
                                <div className="portfolio-caption">
                                    <h5>{data.caption}</h5>
                                    <p className="text-muted">{data.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;