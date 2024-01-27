import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactCircle from "./ContactCircle";
import CustomImg from "../CustomImg";

const Header = () => {
    const totalYear = new Date().getFullYear() - 2018
    const shrawanProfileImg = { "alt": "Shrawan profile image", "imageName": "Shrawan.jpg", "className": "img-portfolio", "desc": "shrawan-profile-img" };

    return (
        <header className="masthead bg-primary text-white text-center">

            <div className="container-fluid pl-5 pr-5">
                <div className="row">
                    <div className="col-lg-4 text-center profile-img">
                        <CustomImg image={shrawanProfileImg} />
                    </div>
                    <div className="col-lg-8 text-center">
                        <div className="container d-flex align-items-center flex-column pt-4">
                            <h1 className="masthead-heading mb-0">Hi, I'm Shrawan Adhikari </h1>
                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>
                                <div className="divider-custom-icon">
                                    <FontAwesomeIcon icon={["fas", "code"]} size="md" />
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>
                            <ContactCircle />
                            <p className="masthead-subheading pb-4">
                                I am a <h3>Software Engineer</h3> <b>
                                    <FontAwesomeIcon icon="fa-solid fa-code" /></b> <br></br>
                                Currently working in enterprise solutions, with over <b>{totalYear}+ years</b> of experience in developing and delivering high-quality applications.
                                I Love to research and explore new tools and technologies.
                                My Core Proficiency is in <b><i>Java, Spring, Docker, Kubernetes, and JavaScript, Angular, React, Bootstrap, Git, and Jira</i></b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </header>
    );
};

export default Header;
