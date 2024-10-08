import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P_LINKEDIN, P_FACEBOOK, P_MEDIUM, P_GITHUB, P_PERSONAL_BLOG } from '../../utils/Constant';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ContactCircle = () => {
    return (
        <div>
            <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <OutboundLink href={P_GITHUB} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} title={"Github"} className="c-github" />
                    </OutboundLink>
                </li>
                <li className="list-inline-item">
                    <OutboundLink href={P_LINKEDIN} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} title={"linkedin"} className="c-linkedin" />
                    </OutboundLink>
                </li>
                <li className="list-inline-item">
                    <OutboundLink href={P_PERSONAL_BLOG} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fa-solid', 'fa-lightbulb']} title={"Blog"} className="c-blog" />
                    </OutboundLink>
                </li>
                {/* <li className="list-inline-item">
                    <OutboundLink href={P_MEDIUM} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'medium']} title={"Medium"} color="#00AB6C"/>
                    </OutboundLink>
                </li> */}
                
            </ul>
        </div>
    );
};

export default ContactCircle;