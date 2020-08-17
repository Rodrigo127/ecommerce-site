import React from 'react';
import ProductCard from './ProductCard'

export default ({ products }) => {
    return(
        <div>
            {
                products.map((product, index) => (
                    <ProductCard product={product} key={product.id} />
                ))
            }
        </div>
    )
}