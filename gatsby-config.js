module.exports = {
  siteMetadata: {
    title: `Shrawan Adhikari Portfolio`,
    description: `This is simple portfolio of shrawan adhikari.`,
    author: `@shrawan adhikari`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shrawan Adhikari Profile`,
        short_name: `ashrawan`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',

    // google-analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134229437-1",
      },
    },
  ],
}
