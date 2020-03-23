module.exports = {
  siteMetadata: {
    title: `The COVID Tracking Project`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    /*{
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "COVID",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "covid",
        // Url to query from
        url: "https://covidtracking.com/api/graphql",
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "covid__",
        name: "state",
        url: `https://covidtracking.com/api/states`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "covid__",
        name: "stateInfo",
        url: `https://covidtracking.com/api/states/info`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "covid__",
        name: "stateDaily",
        url: `https://covidtracking.com/api/states/daily`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "covid__",
        name: "us",
        url: `https://covidtracking.com/api/us`,
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "covid__",
        name: "usDaily",
        url: `https://covidtracking.com/api/us/daily`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The COVID Tracking Project`,
        short_name: `COVID Tracking Project`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icons/icon-512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
