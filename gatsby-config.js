{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `products`,
    path: `${__dirname}/content/products`, // Make sure this matches your config.yml folder!
  },
},
`gatsby-transformer-remark`, // This turns the CMS files into data Gatsby can read
