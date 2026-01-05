import React from 'react';
import { graphql } from 'gatsby'; // 1. Make sure graphql is imported
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/ProductCard'; // Or whatever your card component is named

const ShopPage = ({ data }) => { 
  // 1. This connects the CMS data to the variable 'products'
  const products = data?.allMarkdownRemark?.nodes || []; 

  // 2. We also need to map the data so it matches what the ProductCard expects
  const formattedProducts = products.map(product => ({
    name: product.frontmatter.title,
    price: product.frontmatter.price,
    image: product.frontmatter.image,
    imageAlt: product.frontmatter.title,
  }));

  return (
    <Layout>
      <div className={styles.productContainer}>
        {/* 3. Use 'formattedProducts' here */}
        {formattedProducts.map((item, index) => (
          <ProductCard key={index} {...item} />
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
