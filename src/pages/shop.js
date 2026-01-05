import React from 'react';
import { graphql } from 'gatsby'; // 1. Make sure graphql is imported
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/ProductCard'; // Or whatever your card component is named

const ShopPage = ({ data }) => { // 2. The 'data' prop comes from your query
  const products = data.allMarkdownRemark.nodes; // 3. This is your list of real products

  return (
    <Layout>
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.fields.slug}
            title={product.frontmatter.title}
            price={product.frontmatter.price}
            image={product.frontmatter.image}
          />
        ))}
      </div>
    </Layout>
  );
};

// 4. Paste your query at the very bottom of the file
export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/products/"}}) {
      nodes {
        frontmatter {
          title
          price
          image
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default ShopPage;
