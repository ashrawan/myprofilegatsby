import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tools = () => {
    return (
        <div className="container-fluid tools-div">
            <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'java']} title={"Java"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fas', 'leaf']} title={"Spring"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'js-square']} title={"JavaScript"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'html5']} title={"HTML5"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'angular']} title={"Angular"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'react']} title={"React"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'css3-alt']} title={"CSS3"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'github']} title={"Github"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'jira']} title={"Jira"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'node-js']} title={"NodeJS"} />
                </li>
                <li className="list-inline-item">
                    <FontAwesomeIcon icon={['fab', 'medium']} title={"Medium"} />
                </li>
                <li className="list-inline-item">
                <FontAwesomeIcon icon="fa-brands fa-docker" title={"Docker"} />                </li>
            </ul>
        </div>
    );
};

export default Tools;