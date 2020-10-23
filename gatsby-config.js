module.exports = {
  siteMetadata: {
    defaultTitle: `Linux Sysadmin Test Prep`,
    siteTitle: `Linux Sysadmin Test Prep`,
    siteTitleShort: `Linux Sysadmin Test Prep`,
    siteDescription: `Test Prep for Linux System Administrator Certification`,
    siteUrl: `https://linuxtest.danielc.us`,
    siteAuthor: `Daniel Clough`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/danielclough/linux-sysadmin-test-prep`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Linux Sysadmin Test Prep`,
        short_name: `Linux Sysadmin Test Prep`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-HZSJ8X9Q69`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://linuxtest.danielc.us`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
