module.exports = {
  siteMetadata: {
    title: `My Ecommerce Store`,
  },
  plugins: [
    // 1. Tell Gatsby to look at your CMS products folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products`, // This must match your config.yml folder
      },
    },
    // 2. This turns the markdown files from the CMS into data Gatsby can use
    `gatsby-transformer-remark`,
    // 3. This handles your images so they load fast
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // 4. Netlify specific plugin (helps with redirects and headers)
    `gatsby-plugin-netlify`,
  ],
}
