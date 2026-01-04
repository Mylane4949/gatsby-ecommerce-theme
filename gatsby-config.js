module.exports = {
  siteMetadata: {
    title: `My Ecommerce Store`,
  },
  plugins: [
    // --- THIS IS THE NEW SECTION ---
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/content/products`, 
      },
    },
    `gatsby-transformer-remark`,
    // ------------------------------

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    
    // ... if your template had other plugins, leave them here!
  ],
}
