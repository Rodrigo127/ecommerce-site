import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Product from '../components/Product';

export default (props) => {
    const product = props.data.stripeProduct;
    const prices = props.data.allStripePrice.nodes;
    return(
        <Layout><Product prices={prices} product={product}></Product></Layout>
    )
}

export const pageQuery = graphql`
    query($id: String){
        stripeProduct(id: { eq: $id }){
            id
            slug
            images
            name
        }
        allStripePrice(filter: {product: {id: {eq: $id}}}) {
            nodes {
                currency
                unit_amount
                unit_amount_decimal
                created
                id
                nickname
            }
        }
    }
`;