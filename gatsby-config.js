module.exports = {
  siteMetadata: {
    defaultTitle: `Linux Sysadmin Test Prep`,
    siteTitle: `Linux Sysadmin Test Prep`,
    siteTitleShort: `Linux Sysadmin Test Prep`,
    siteDescription: `Test Prep for Linux System Administrator Certification`,
    siteUrl: `https://lfcs.danielc.us`,
    siteAuthor: `Daniel Clough`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
      footer: `© 2020 Daniel Clough`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/danielclough/Linux-Sysadmin-Test-Prep`,
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
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lfcs.danielc.us`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
