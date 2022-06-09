import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


function StripeCheckOutButton({price}) {

    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51L360cDCCSSMEG0N8LBqjEWd38XMPZAAMZCboEc0UaaBE5A3EzjvwjM8rWlYzNdCjyQPNxM0YzknRFqDaBvLbnVs00klQbOXoI";
 
    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful")
        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error))
            alert("There was an issue with your payment. Please sure you use the provided credit cart")
        })
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