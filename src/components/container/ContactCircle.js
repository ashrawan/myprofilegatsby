import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P_LINKEDIN, P_FACEBOOK, P_MEDIUM, P_GITHUB } from '../../utils/Constant';

const ContactCircle = () => {
    return (
        <div>
            <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <a target="_blank" rel="noopener noreferrer" href={P_LINKEDIN}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} title={"linkedin"} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a target="_blank" rel="noopener noreferrer" href={P_FACEBOOK}>
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} title={"facebook"} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a target="_blank" rel="noopener noreferrer" href={P_MEDIUM}>
                        <FontAwesomeIcon icon={['fab', 'medium']} title={"Medium"} />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a target="_blank" rel="noopener noreferrer" href={P_GITHUB}>
                        <FontAwesomeIcon icon={['fab', 'github']} title={"Github"} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactCircle;