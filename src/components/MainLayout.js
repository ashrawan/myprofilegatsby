import React from "react"

import './../styles/bootstrap.min.css';
import './../styles/index.css';
import './../styles/styles.scss';

import { Element } from 'react-scroll';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./container/Footer";
import Navigation from "./container/Navigation";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

const MainLayout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <Navigation />
                <main>{children}</main>
                <Element name="section-contact" className="element"><Footer /></Element>
            </>
        )}
    />
)

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default MainLayout
