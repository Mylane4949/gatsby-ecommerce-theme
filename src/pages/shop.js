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

  const ShopPage = ({ data }) => {
  // 1. Get your real products from the CMS data
  const products = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="product-grid">
        {/* 2. Loop through each product and fill the ProductCard "mold" */}
        {products.map((node) => (
          <ProductCard 
            key={node.fields.slug}
            name={node.frontmatter.title}
            price={node.frontmatter.price}
            image={node.frontmatter.image}
            imageAlt={node.frontmatter.title}
            slug={node.fields.slug} // This sends the URL to the card
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
        fields {
          slug
        }
        frontmatter {
          title
          price
          image
        }
      }
    }
  }
`;

export default ShopPage;
