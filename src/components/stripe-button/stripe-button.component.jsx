import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price, className}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_VorQSCEM6KQZdQjNXUtYhqpo00TKc4cLNq' 

    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="adalene"
            className={className}
            billingAddress
            shippingAddress
            image={require("./favicon.ico")}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton