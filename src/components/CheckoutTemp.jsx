import React, {useState, useEffect} from 'react';

export default ({ priceId }) => {
    console.log(priceId);

    const [stripe, setStripe] = useState({});
    useEffect(()=>{
        setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    }, []); //componentDidMount

    const redirectToCheckout = async(ev) => {
        const response = await stripe.redirectToCheckout({
            lineItems: [
                    {price: priceId, quantity: 1},
                ],
            mode: 'payment',
            successUrl: `http://127.0.0.1:8000/completado`,
            cancelUrl: `http://127.0.0.1:8000/`
        });

        if(response.error){
            console.log(response.error);
        }
    }

    return(
        <button onClick={redirectToCheckout} className="app-btn text-xl">Checkout</button>
    )
}