import React, {useState, useEffect} from 'react';
import Checkout from './Checkout';

export default ({ shoppingCart }) => {

    const [stripe, setStripe] = useState({});
    useEffect(()=>{
        setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    }, []); //componentDidMount

    const redirectToCheckout = async(ev) => {
        const response = await stripe.redirectToCheckout({
            lineItems: shoppingCart.map( product => ({price: product.id, quantity: product.quantity})),
            mode: 'payment',
            successUrl: `http://127.0.0.1:8000/completado`,
            cancelUrl: `http://127.0.0.1:8000/`
        });

        if(response.error){
            console.log(response.error);
        }
    }

    return(
        <Checkout redirectToCheckout={redirectToCheckout} />
    )
}