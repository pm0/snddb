// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-json`,
      options: {
        // change from 'nameJson' to 'name'
        typeName: ({ node }) => node.relativeDirectory,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro\:200,400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [`**/404/**`, `**/404.html`],
        crumbLabelUpdates: [
          {
            pathname: '/hero',
            crumbLabel: 'Heroes',
          },
          {
            pathname: '/item',
            crumbLabel: 'Items',
          },
        ],
      },
    },
  ],
};
