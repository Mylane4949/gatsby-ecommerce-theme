import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/ProductCard';

const ShopPage = ({ data }) => {
  // Get your products from the CMS data
  const products = data?.allMarkdownRemark?.nodes || [];

  return (
    <Layout>
      {/* Ensure this class matches your CSS or change to a standard div */}
      <div className="product-grid">
        {products.map((node) => (
          <ProductCard 
            key={node.fields.slug}
            name={node.frontmatter.title}
            price={node.frontmatter.price}
            image={node.frontmatter.image}
            imageAlt={node.frontmatter.title}
            slug={node.fields.slug} 
          />
        ))}
      </div>
    </Layout>
  );
};

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
