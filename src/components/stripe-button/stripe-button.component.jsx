import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckOutButton({price}) {

    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51L360cDCCSSMEG0N8LBqjEWd38XMPZAAMZCboEc0UaaBE5A3EzjvwjM8rWlYzNdCjyQPNxM0YzknRFqDaBvLbnVs00klQbOXoI";
 
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
    <StripeCheckout 
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
    />
  )
}

export default StripeCheckOutButton