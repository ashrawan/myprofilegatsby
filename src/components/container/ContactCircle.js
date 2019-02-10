import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P_LINKEDIN, P_FACEBOOK, P_MEDIUM, P_GITHUB } from '../../utils/Constant';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ContactCircle = () => {
    return (
        <div>
            <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <OutboundLink href={P_LINKEDIN} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} title={"linkedin"} />
                    </OutboundLink>
                </li>
                <li className="list-inline-item">
                    <OutboundLink href={P_FACEBOOK} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} title={"facebook"} />
                    </OutboundLink>
                </li>
                <li className="list-inline-item">
                    <OutboundLink href={P_MEDIUM} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'medium']} title={"Medium"} />
                    </OutboundLink>
                </li>
                <li className="list-inline-item">
                    <OutboundLink href={P_GITHUB} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} title={"Github"} />
                    </OutboundLink>
                </li>
            </ul>
        </div>
    );
};

export default ContactCircle;