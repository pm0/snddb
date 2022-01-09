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
    'gatsby-transformer-json',
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
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        //autoGenHomeLabel: `Home`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [`**/404/**`, `**/404.html`],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        /*excludeOptions: {
          separator: '.'
        },*/
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [
          {
            pathname: '/hero',
            crumbLabel: 'Heroes',
          },
        ],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        //trailingSlashes: true,
        // usePathPrefix: optional, if you are using pathPrefix above
        //usePathPrefix: '/blog',
      },
    },
  ],
};
