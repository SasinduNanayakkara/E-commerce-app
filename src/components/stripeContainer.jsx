import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'
const SRTIPE_KEY = "pk_test_51K6sEKLRwHthzQXWbRsgr75mXuxZZPyuNpagslzOVqc3XFotUKrYH2PAj0pzuYMa6XGIabtnCvVVkN6CvaOGwktE00mIuZpR50";


const stripePromise = loadStripe(SRTIPE_KEY);
const stripeContainer = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    )
}

export default stripeContainer
