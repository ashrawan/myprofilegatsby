import React from 'react';
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

const CustomImg = (data) => {
    const { alt, imageName, className } = data.image;
    return (
        <StaticQuery
            query={graphql`
            query {
                images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                  edges {
                    node {
                      extension
                      relativePath
                      childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
              `}
            render={data => {
                const image = data.images.edges.find(
                    image => image.node.relativePath === imageName
                )
                return (
                    <>
                        {!!image && <Img className={className} alt={alt} fluid={image.node.childImageSharp.fluid} alt={imageName} />}
                    </>
                );
            }}
        />
    );
};

export default CustomImg;

// export const imageQuery = graphql`
// query {
//     images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//       edges {
//         node {
//           extension
//           relativePath
//           childImageSharp {
//           fluid(maxWidth: 1000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// }
//   `