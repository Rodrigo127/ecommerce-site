import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart, addItem } from '../state/actions/shopping_cart';
import AddToCart from './AddToCart';

const AddToCartBtn = ({product}) => {
    const dispatch = useDispatch();

    const addProductToCart = (ev) => {
        dispatch(addItem(product));
    }

    return(
        <AddToCart addProduct={addProductToCart} />
    )
}

const mapStateToProps = (state) => state.shopping_cart;
export default connect(null, { addToCart })(AddToCartBtn);