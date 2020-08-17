import React from 'react';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { graphql } from 'gatsby';

export default (props) => {
    return(
        <Layout>
            <Products products={props.data.allStripeProduct.nodes} />
        </Layout>
    )
};

export const pageQuery = graphql`
        {
            allStripeProduct {
                nodes {
                    id
                    slug
                    name
                    images
                }
            }
        }
  
`
