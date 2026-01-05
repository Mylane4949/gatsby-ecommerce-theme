module.exports = {
  siteMetadata: {
    title: `My Ecommerce Store`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`, // Change from 'posts' to 'products'
        path: `${__dirname}/content/products`, // This is where your AI Wallpaper file lives
      },
    },
    `gatsby-transformer-remark`, // This "reads" the content of the .md files
    `gatsby-plugin-netlify`,     // Essential for the CMS to work on Netlify
    // ... leave your other plugins (like sharp, images, etc.) below this
  ],
}
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
  ],
}
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
