import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

const ProductTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <img src={frontmatter.image} alt={frontmatter.title} style={{ width: '100%' }} />
        <h1>{frontmatter.title}</h1>
        <p>Price: ${frontmatter.price}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        image
      }
    }
  }
`
export default ProductTemplate
