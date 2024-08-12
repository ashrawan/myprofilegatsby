import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactCircle from "./ContactCircle";
import CustomImg from "../CustomImg";
import Spn from "./Spn";
import { P_LINKEDIN, P_PERSONAL_BLOG } from '../../utils/Constant';
import { OutboundLink } from 'gatsby-plugin-google-analytics'


const Header = () => {
    const totalYear = new Date().getFullYear() - 2018
    const shrawanProfileImg = { "alt": "Shrawan profile image", "imageName": "Shrawan-p.jpg", "className": "img-portfolio", "desc": "shrawan-profile-img" };

    return (
        <header className="masthead bg-primary text-white text-center">

            <div className="container-fluid pl-5 pr-5">
                <div className="row">
                    {/* <div className="col-lg-4 text-center profile-img">
                        <CustomImg image={shrawanProfileImg} />
                    </div> */}
                    <div className="col-lg-12 ">

                    <div className="text-center profile-img">
                        <CustomImg image={shrawanProfileImg} />
                    </div>

                    <Spn classes="spn-wrap spn-left"/>
                    <Spn classes="spn-wrap spn-right"/>

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
                            <span className="font-summary">I’m a <b>Software Engineer</b> with <b>{totalYear}+ years</b> of experience in <b>creating, scaling, and maintaining</b> enterprise software products. </span>
                            <br/><br/>
                            I enjoy working with <b>Security, Microservices, Research, DevOps, AI, and emerging technologies</b>.
                            My passion is on building innovative solutions, exploring new tools, and collaborating on impactful projects while sharing my insights through <b><OutboundLink href={P_PERSONAL_BLOG} target="_blank" rel="noopener noreferrer">Blogging</OutboundLink></b>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>



        </header>
    );
};

export default Header;
